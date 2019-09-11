/*
 * @Description: 
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-05 16:21:20
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-11 21:14:37
 */
import { httpGet, httpPost } from '../http/http';

// 用户登录
export function login(data = {}) {
  return httpPost('/manage/user/login.do', data)
}

export function getUserList(params = {}) {
  return httpGet('/api/v1/user/user_list', params)
}