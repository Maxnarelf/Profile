import { CHANGE_APP_THEME, TOGGLE_DEVICE_THEME } from './types';

export const changeAppTheme = (appTheme) => ({
  type: CHANGE_APP_THEME,
  appTheme,
});
export const toggleDeviceTheme = (deviceTheme) => ({
  type: TOGGLE_DEVICE_THEME,
  deviceTheme,
});
