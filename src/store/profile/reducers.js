import {
  SET_NAME, SET_NAME_INPUT, SET_NICKNAME, SET_NICKNAME_INPUT, SET_BIO, SET_BIO_INPUT
} from './actions';

const initialState = {
  name: 'Lunyov Sergey',
  nameInput: '',
  nickname: 'Maxnar',
  nicknameInput: '',
  bio: 'Люблю спорт, игры',
  bioInput: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name
      };
    case SET_NAME_INPUT:
      return {
        ...state,
        name: action.name
      };
    case SET_NICKNAME:
      return {
        ...state,
        nickname: action.nickname
      };
    case SET_NICKNAME_INPUT:
      return {
        ...state,
        nickname: action.nickname
      };
    case SET_BIO:
      return {
        ...state,
        bio: action.bio
      };
    case SET_BIO_INPUT:
      return {
        ...state,
        bio: action.bio
      };
    default:
      return state;
  }
};

export default profileReducer;
