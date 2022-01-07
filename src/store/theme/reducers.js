import { CHANGE_APP_THEME } from './types';

const initialState = {
  appTheme: undefined,
};

const appThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_THEME:
      return {
        ...state,
        appTheme: action.appTheme,
      };
    default:
      return state;
  }
};

export default appThemeReducer;
