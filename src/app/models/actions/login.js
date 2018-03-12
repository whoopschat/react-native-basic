'use strict';

// 模拟用户信息
import {LOGIN_IN_DOING, LOGIN_IN_DONE, LOGIN_IN_ERROR} from '../constants/login';

let user = {
  name: 'zhangsan',
  age: 24,
}

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login() {
  console.log('登录方法');
  return dispatch => {
    dispatch(Store.createAction(LOGIN_IN_DOING));
    // 模拟用户登录
    fetch('https://www.baidu.com/').then(res => {
      dispatch(Store.createAction(LOGIN_IN_DONE, {user: user}));
    }).catch(e => {
      dispatch(Store.createAction(LOGIN_IN_ERROR));
    })
  }
}