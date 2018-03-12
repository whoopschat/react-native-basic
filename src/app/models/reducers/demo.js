'use strict';

import {LOGIN_IN_DOING, LOGIN_IN_DONE, LOGIN_IN_ERROR} from '../constants/login';

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
        status: '你好',
        isSuccess: false,
        user: null,
      };
    case LOGIN_IN_DONE:
      return {
        ...state,
        status: '呵呵',
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