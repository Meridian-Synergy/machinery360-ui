import '../src/tokens/tokens.css'
import '../src/tokens/base.css'

/**
 * Fonts referenced by the tokens are loaded here for Storybook ONLY.
 * Consumer apps load their own fonts; the DS ships none (see tokens.css).
 */
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap'
document.head.appendChild(link)

/**
 * Theme switcher. Both themes must be exercised on every UI change — most theme
 * bugs are only visible to the eye, and usually only in the theme you did NOT
 * develop in. A green build proves nothing here.
 */
export const globalTypes = {
  theme: {
    description: 'Theme',
    defaultValue: 'light',
    toolbar: {
      title: 'Theme',
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      dynamicTitle: true,
    },
  },
}

export const decorators = [
  (story: () => unknown, context: { globals: Record<string, string> }) => {
    const theme = context.globals.theme ?? 'light'
    document.documentElement.setAttribute('data-theme', theme)
    document.body.style.background = 'var(--mc-color-bg)'
    document.body.style.color = 'var(--mc-color-text)'
    return story()
  },
]

export const parameters = {
  layout: 'padded',
  backgrounds: { disable: true },
}
