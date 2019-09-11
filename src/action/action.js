import actionTypes from './actionTypes';

const toUser = () => {
  return {
    type: actionTypes.TO_USER
  }
}

const toProduct = () => {
  return {
    type: actionTypes.TO_PRODUCT
  }
}

const toOrder = () => {
  return {
    type: actionTypes.TO_ORDER
  }
}

export default {
  toUser,
  toProduct,
  toOrder
}