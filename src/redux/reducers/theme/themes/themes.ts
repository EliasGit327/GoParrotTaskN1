export interface ITheme {
  mode: 'dark' | 'light';
  PRIMARY_BACKGROUND_COLOR: string;
  PRIMARY_TEXT_COLOR: string;
  PRIMARY_BUTTON_COLOR: string;
  PRIMARY_BUTTON_TEXT_COLOR: string;
  STATUS_BAR_STYLE: 'light-content' | 'default';
  CARD_BACKGROUND_COLOR: string;
}

export const darkTheme: ITheme = require('./dark-theme.json');
export const lightTheme: ITheme = require('./light-theme.json');
