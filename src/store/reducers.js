import { combineReducers } from 'redux';
import profileReducer from './profile/reducers';
import appThemeReducer from './theme/reducers';

export default combineReducers({ profileReducer, appThemeReducer });
