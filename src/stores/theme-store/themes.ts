export interface ITheme {
  mode: 'dark' | 'light';
  PRIMARY_BACKGROUND_COLOR: string;
  PRIMARY_TEXT_COLOR: string;
  PRIMARY_BUTTON_COLOR: string;
  PRIMARY_BUTTON_TEXT_COLOR: string;
  STATUS_BAR_STYLE: 'light-content' | 'default';
}

export const darkTheme: ITheme = {
  mode: 'dark',
  PRIMARY_BACKGROUND_COLOR: '#212121',
  PRIMARY_TEXT_COLOR: '#ffffff',
  PRIMARY_BUTTON_COLOR: '#8022d9',
  PRIMARY_BUTTON_TEXT_COLOR: '#ffffff',
  STATUS_BAR_STYLE: 'light-content'
};

export const lightTheme: ITheme = {
  mode: 'light',
  PRIMARY_BACKGROUND_COLOR: '#ffffff',
  PRIMARY_TEXT_COLOR: '#212121',
  PRIMARY_BUTTON_COLOR: '#23a8d9',
  PRIMARY_BUTTON_TEXT_COLOR: '#ffffff',
  STATUS_BAR_STYLE: 'default'
};
