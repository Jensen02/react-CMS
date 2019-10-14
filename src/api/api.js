/*
 * @Description: 
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-05 16:21:20
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-20 17:28:04
 */
import { httpGet, httpPost } from '../http/http';

// 用户登录
export function login(data = {}) {
  return httpPost('/manage/user/login.do', data)
}

/*************** 用户管理 ***************/

/**
 * @description: 获取用户列表
 * @param {type} 
 * @return: 
 */
export const getUserList = async (params = {}) => {
  return await httpGet('/api/v1/user/user_list', params);
}


/*************** 订单管理 ***************/

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

/*************** 品类管理 ***************/

/**
 * @description: 添加品类
 * @param {type} 
 * @return: 
 */
export const addCategory = async (first, second, name) => {
  return await httpPost('/api/v1/category/add', {
    first,
    second,
    name
  });
}

/**
 * @description: 获取一级品类列表
 * @param {type} 
 * @return: 
 */
export const getCategoryFirstList = async () => {
  return await httpGet('/api/v1/category/first');
}

/**
 * @description: 获取二级品类列表
 * @param {type} 
 * @return: 
 */
export const getCategorySecondList = async (first) => {
  return await httpGet('/api/v1/category/second', {
    first
  });
}

/**
 * @description: 获取三级品类列表
 * @param {type} 
 * @return: 
 */
export const getCategoryThirdList = async (first, second) => {
  return await httpGet('/api/v1/category/third', {
    first,
    second
  })
}

/**
 * @description: 修改品类名称
 * @param {type} 
 * @return: 
 */
export const updateCategoryName = async (id, name) => {
  return await httpPost('/api/v1/category/update', {
    id,
    name
  });
}