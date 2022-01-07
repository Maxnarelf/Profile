import { CHANGE_APP_THEME } from './types';

export const changeAppTheme = (appTheme) => ({
  type: CHANGE_APP_THEME,
  appTheme,
});
