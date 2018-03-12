'use strict';

const initialState = {
  status: '点击登录',
  isSuccess: false,
  user: null,
};

export default Store.handleActions({
  LOGIN_IN_DOING: (state, action) => ({
    ...state,
    status: '正在登录',
    isSuccess: false,
    user: null,
  }),
  LOGIN_IN_DONE: (state, action) => ({
    ...state,
    status: JSON.stringify(action.user),
    isSuccess: true,
    user: action.user,
  }),
  LOGIN_IN_ERROR: (state, action) => ({
    ...state,
    status: '登录出错',
    isSuccess: true,
    user: null,
  }),
},initialState)