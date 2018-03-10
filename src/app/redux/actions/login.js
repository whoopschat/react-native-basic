'use strict';
// 模拟用户信息
import {LOGIN_IN_DOING, LOGIN_IN_DONE, LOGIN_IN_ERROR} from '../types/login';

let user = {
  name: 'zhangsan',
  age: 24,
}

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login() {
  console.log('登录方法');
  return dispatch => {
    dispatch(isLogining());
    // 模拟用户登录
    fetch('https://www.baidu.com/').then(res => {
      dispatch(loginSuccess(true, user));
    }).catch(e => {
      dispatch(loginError());
    })
  }
}

function isLogining() {
  return {
    type: LOGIN_IN_DOING
  }
}

function loginSuccess(isSuccess, user) {
  console.log('success');
  return {
    type: LOGIN_IN_DONE,
    user: user,
  }
}

function loginError() {
  console.log('error');
  return {
    type: LOGIN_IN_ERROR
  }
}