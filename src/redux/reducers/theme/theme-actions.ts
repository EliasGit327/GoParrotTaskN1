export type ThemeAction = SwitchTheme;

interface SwitchTheme {
  type: 'CHANGE_THEME',
  payload?: null | undefined
}
