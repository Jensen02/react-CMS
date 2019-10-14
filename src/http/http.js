/*
 * @Description: 
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-05 18:06:23
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-23 20:34:14
 */
import axios from 'axios';
import qs from 'qs';
// import $ from 'jquery';
// import { message } from 'antd';

// 根据代码环境配置请求的baseUrl 
const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8088/' : 'http://localhost:8088/';

axios.defaults.baseURL = BASE_URL;
// 设置请求超时时间
axios.defaults.timeout = 10000;

// axios.defaults.withCredentials=true

// 设置请求拦截
// axios.interceptors.request.use((config) => {
//   let token = localStorage.getItem('cms_token');
//   token && (config.headers.Authorization = `Bearer ${token}`)
//   return config;
// }, (error) => {
//   return Promise.resolve(error);
// })

// 设响应拦截
// axios.interceptors.response.use((response) => {

// })

// 封装GET请求
export const httpGet = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, { 
      params
    }).then((res) => {
      resolve(res.data);
    })
    .catch((error) => {
      reject(error);
    })
  })
}

// 封装POST请求
export const httpPost = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data))
    .then((res) => {
      resolve(res.data);
    })
    .catch((error) => {
      reject(error);
    })
  })
}

// export const request = (param) => {
//   return new Promise((resolve, reject) => {
//     $.ajax({
//       type: param.type || 'get',
//       url: 'http://admintest.happymmall.com' + param.url,
//       dataType: param.dataType || 'json',
//       data: param.data,
//       success(res) {
//         resolve(res)
//       },
//       error(error) {
//         reject(error)
//       }
//     })
//   })
// }