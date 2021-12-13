import {
  SET_NAME, SET_NAME_INPUT, SET_NICKNAME, SET_NICKNAME_INPUT, SET_BIO, SET_BIO_INPUT
} from './types';

export const setName = (name) => ({
  type: SET_NAME,
  name,
});
export const setNameInput = (nameInput) => ({
  type: SET_NAME_INPUT,
  nameInput,
});

export const setNickname = (nickname) => ({
  type: SET_NICKNAME,
  nickname,
});
export const setNicknameInput = (nicknameInput) => ({
  type: SET_NICKNAME_INPUT,
  nicknameInput,
});

export const setBio = (bio) => ({
  type: SET_BIO,
  bio,
});
export const setBioInput = (bioInput) => ({
  type: SET_BIO_INPUT,
  bioInput,
});
