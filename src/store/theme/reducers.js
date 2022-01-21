import { CHANGE_APP_THEME, TOGGLE_DEVICE_THEME } from './types';

const initialState = {
  appTheme: undefined,
  deviceTheme: undefined,
};

const appThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_THEME:
      return {
        ...state,
        appTheme: action.appTheme,
        deviceTheme: initialState.deviceTheme,
      };
    case TOGGLE_DEVICE_THEME:
      return {
        ...state,
        deviceTheme: action.deviceTheme,
        appTheme: initialState.appTheme,
      };
    default:
      return state;
  }
};

export default appThemeReducer;
