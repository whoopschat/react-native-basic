'use strict';

import {LOGIN_IN_DOING, LOGIN_IN_DONE, LOGIN_IN_ERROR} from "../types/login";

const initialState = {
  status: '点击登录',
  isSuccess: false,
  user: null,
};

export default function loginIn(state = initialState, action) {
  switch (action.type) {
    case LOGIN_IN_DOING:
      return {
        ...state,
        status: '正在登陆',
        isSuccess: false,
        user: null,
      };
    case LOGIN_IN_DONE:
      return {
        ...state,
        status: JSON.stringify(action.user),
        isSuccess: true,
        user: action.user,
      };
    case LOGIN_IN_ERROR:
      return {
        ...state,
        status: '登录出错',
        isSuccess: true,
        user: null,
      };
    default:
      console.log(state);
      return state;
  }
}