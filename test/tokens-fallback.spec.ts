import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

/**
 * Structural guards over the component sources.
 *
 * These encode rules that cost us real bugs elsewhere and that a human reviewer
 * reliably forgets. They run in CI on every PR.
 */

const COMPONENTS_DIR = join(import.meta.dirname, '..', 'src', 'components')

function componentFiles(): { name: string, path: string, source: string }[] {
  return readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map((e) => {
      const path = join(COMPONENTS_DIR, e.name, `${e.name}.vue`)
      return { name: e.name, path, source: readFileSync(path, 'utf8') }
    })
}

describe('design tokens', () => {
  /**
   * A consumer is not required to declare our token layer. Without a literal
   * fallback the property resolves to nothing and the component renders
   * invisible or unstyled — the black-on-navy bug we shipped on wp360.
   */
  it('every var(--mc-*) reference carries a literal fallback', () => {
    const offenders: string[] = []

    for (const { name, source } of componentFiles()) {
      // Custom properties DEFINED in this same file are local plumbing, not
      // consumer-facing tokens, so they legitimately need no fallback.
      const locallyDefined = new Set(
        [...source.matchAll(/(--mc-[a-z0-9-]+)\s*:/g)].map(m => m[1]),
      )

      for (const match of source.matchAll(/var\(\s*(--mc-[a-z0-9-]+)\s*([,)])/g)) {
        const [, token, terminator] = match
        if (terminator === ')' && !locallyDefined.has(token)) {
          offenders.push(`${name}: var(${token}) has no fallback`)
        }
      }
    }

    expect(offenders).toEqual([])
  })
})

/** Strip comments — an emoji in a code comment is documentation, not an icon. */
function withoutComments(source: string): string {
  return source
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
}

describe('icons', () => {
  /**
   * Emoji are rendered by the system font: inconsistent across OSes, outside
   * the charter, and screen readers VOCALIZE them ("microphone", "check mark"),
   * polluting the accessible name. Icons are SVG with aria-hidden.
   *
   * `Extended_Pictographic` alone is NOT enough — it misses exactly the glyphs
   * people reach for as icons: ✓ (U+2713) and ✕ (U+2715) are Dingbats, → is an
   * Arrow. Those are the hijacked-glyph case the rule targets, so the ranges
   * below are part of the guard, not decoration.
   *
   * Typographic punctuation (— – ' " …) lives in U+2000–U+206F and stays legal.
   */
  const ICON_GLYPH = /[\p{Extended_Pictographic}←-⇿✀-➿⬀-⯿]/u

  it('no emoji or hijacked glyph in rendered output', () => {
    const offenders = componentFiles()
      .filter(({ source }) => ICON_GLYPH.test(withoutComments(source)))
      .map(({ name }) => name)

    expect(offenders).toEqual([])
  })
})

describe('props', () => {
  /**
   * An array or object prop that a consumer forgets must degrade to an empty
   * state, never crash the render. Without a default, `props.items.find(...)`
   * throws on `undefined` — that is a 500 in production, from a missing
   * attribute (vécu FDC 2026-07-14: FdcLocaleSwitcher without :locales).
   *
   * `vue/require-default-prop` can't express this (it fires on every optional
   * scalar too), so the rule lives here instead.
   */
  it('array and object props declare a default', () => {
    const offenders: string[] = []

    for (const { name, source } of componentFiles()) {
      const props = source.match(/defineProps<\{([\s\S]*?)\}>\(\)/)
      if (!props) continue

      // Only optional props can be omitted by a consumer; required ones are a
      // typecheck error at the call site.
      for (const line of props[1].split('\n')) {
        const declaration = line.match(/^\s*(\w+)\?:\s*(.+?)\s*$/)
        if (!declaration) continue

        const [, prop, type] = declaration
        const isCollection = /\[\]|^Array<|^Record<|^\{/.test(type)
        if (!isCollection) continue

        // withDefaults(...) is a separate call; look for `prop: () =>` in it.
        const hasDefault = new RegExp(`${prop}\\s*:\\s*\\(\\s*\\)\\s*=>`).test(source)
        if (!hasDefault) offenders.push(`${name}.${prop} (${type})`)
      }
    }

    expect(offenders).toEqual([])
  })
})

describe('public entry point', () => {
  it('exports every component directory', () => {
    const index = readFileSync(join(import.meta.dirname, '..', 'src', 'index.ts'), 'utf8')
    const missing = componentFiles()
      .map(({ name }) => name)
      .filter(name => !index.includes(`/${name}/${name}.vue`))

    expect(missing).toEqual([])
  })
})
