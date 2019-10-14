/*
 * @Description: 主要存放一些辅助工具函数
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-19 20:19:06
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-20 21:05:19
 */

/**
 * @description: 数据转换
 * @param {type} 
 * @return: 
 */ 
export const changeData = (dataArr = []) => {
  dataArr.forEach(item => {
    Object.defineProperty(item, 'key', {
      value: item['id']
    });
    item['created_time'] = new Date(item['created_time']).toLocaleString()
    if(item['phone']) {
      let str = item['phone'];
      item['phone'] = str.substr(0, 3) + ' ' + str.substr(3, 4) + ' ' + str.substr(7, 4)
    }
  })
}

/**
 * @description: 获取url的params参数
 * @param {type} 
 * @return: 
 */
export const getUrlParams = (pathname) => {
  const pathnameArr = pathname.split('/');
  return parseInt(pathnameArr[pathnameArr.length - 1]);
} 

// export default changeData;