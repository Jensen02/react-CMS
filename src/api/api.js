/*
 * @Description: 
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-05 16:21:20
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-17 22:19:55
 */
import { httpGet, httpPost } from '../http/http';

// 用户登录
export function login(data = {}) {
  return httpPost('/manage/user/login.do', data)
}

/**
 * @description: 获取用户列表
 * @param {type} 
 * @return: 
 */
export const getUserList = async (params = {}) => {
  return await httpGet('/api/v1/user/user_list', params);
}

/**
 * @description: 获取订单列表
 * @param {type} 
 * @return: 
 */
export const getOrderList = async (limit = 10, offset = 0) => {
  return await httpGet('/api/v1/order/order_list', {
    limit: limit,
    offset: offset
  });
}

/**
 * @description: 根据id获取订单详情
 * @param {type} 
 * @return: 
 */
export const getOrderDetail = async (orderId = 1) => {
  return await httpGet('/api/v1/order/detail', {
    orderId
  });
}