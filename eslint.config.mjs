// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

/**
 * Standalone flat config for the Vue component library (no Nuxt runtime).
 *
 * Correctness only — eslint-plugin-vue LAYOUT rules are disabled. `stylistic:false`
 * alone is not enough: leaving html-indent/attributes-order/html-self-closing on
 * makes `eslint --fix` reformat the whole codebase into an unreviewable diff.
 *
 * `any` / unused-vars sit at `warn` as a ratchet — the gate is green on `error`,
 * and we raise the notch lot by lot.
 */
const VUE_FORMATTING_OFF = {
  'vue/html-self-closing': 'off',
  'vue/attributes-order': 'off',
  'vue/max-attributes-per-line': 'off',
  'vue/first-attribute-linebreak': 'off',
  'vue/html-closing-bracket-newline': 'off',
  'vue/html-closing-bracket-spacing': 'off',
  'vue/html-indent': 'off',
  'vue/html-quotes': 'off',
  'vue/multiline-html-element-content-newline': 'off',
  'vue/singleline-html-element-content-newline': 'off',
  'vue/mustache-interpolation-spacing': 'off',
  'vue/no-multi-spaces': 'off',
  'vue/no-spaces-around-equal-signs-in-attribute': 'off',
  'vue/html-end-tags': 'off',
  'vue/attribute-hyphenation': 'off',
  'vue/v-on-event-hyphenation': 'off',
  'vue/v-bind-style': 'off',
  'vue/v-on-style': 'off',
  'vue/order-in-components': 'off',
  'vue/this-in-template': 'off',
}

export default createConfigForNuxt({
  features: { stylistic: false, tooling: false },
})
  .append({ ignores: ['storybook-static', 'node_modules', 'dist'] })
  .append({
    rules: {
      ...VUE_FORMATTING_OFF,
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrors: 'none' },
      ],
      'vue/multi-word-component-names': 'off',
      'no-empty': ['error', { allowEmptyCatch: true }],
      // Off: with TypeScript-typed props, an optional prop's default IS
      // `undefined` and declaring it changes nothing. The rule fires on every
      // optional scalar and drowns the signal. What actually matters — array and
      // object props MUST default to []/{} so a forgotten prop degrades to an
      // empty state instead of crashing the render (vécu FDC: a 500 in prod from
      // `props.locales.find` on undefined) — is enforced by a real guard in
      // test/tokens-fallback.spec.ts, which the ESLint rule cannot express.
      'vue/require-default-prop': 'off',
    },
  })
  .append({
    files: ['**/*.d.ts', '.storybook/**'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  })
