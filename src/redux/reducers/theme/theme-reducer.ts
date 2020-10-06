import IThemeState from './itheme-state';
import {Reducer, PreloadedState} from 'redux';
import {darkTheme, lightTheme} from './themes/themes';
import { ThemeAction } from "./theme-actions";

const themeStoreInitialState: PreloadedState<IThemeState> = {
  theme: lightTheme,
};

export const themeReducer: Reducer<IThemeState, ThemeAction> =
  (state: IThemeState | undefined, action: ThemeAction): IThemeState => {
  if (!state) {
    return themeStoreInitialState;
  }
  switch (action.type) {
    case 'CHANGE_THEME':
      const newState = {
        ...state,
        theme: state.theme.mode === 'light' ? darkTheme : lightTheme,
      };
      return newState;
    default:
      return state;
  }
};
