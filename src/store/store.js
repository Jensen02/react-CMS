/*
 * @Description: store
 * @Author: Jensen
 * @Github: https://github.com/Jensen02
 * @Date: 2019-09-04 19:21:36
 * @LastEditors: Jensen
 * @LastEditTime: 2019-09-23 20:48:28
 */
import { createStore } from 'redux';
import rootReducer from '../reducers/sideNav-reducer';

const store = createStore(rootReducer);

export default store;