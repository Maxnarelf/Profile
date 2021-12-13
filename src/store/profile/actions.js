import {
  SET_NAME, SET_NAME_INPUT, SET_NICKNAME, SET_NICKNAME_INPUT, SET_BIO, SET_BIO_INPUT 
} from './types';

export const setName = (name) => ({
  type: SET_NAME,
  name,
});
export const setNameInput = (name) => ({
  type: SET_NAME_INPUT,
  name,
});

export const setNickname = (nickname) => ({
  type: SET_NICKNAME,
  nickname,
});
export const setNicknameInput = (nickname) => ({
  type: SET_NICKNAME_INPUT,
  nickname,
});

export const setBio = (bio) => ({
  type: SET_BIO,
  bio,
});
export const setBioInput = (bio) => ({
  type: SET_BIO_INPUT,
  bio,
});
