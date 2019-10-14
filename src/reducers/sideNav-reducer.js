import { combineReducers } from 'redux';
import actionTypes from '../action/actionTypes';

const navReducer = (state = {
  openKey: "sub1",
  selectedKey: "1"
}, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actionTypes.TO_USER: 
      return {
        openKey: "sub4",
        selectedKey: "5"
      };
    case actionTypes.TO_PRODUCT: 
      return {
        openKey: "sub2",
        selectedKey: "2"
      };
    case actionTypes.TO_ORDER:
      return {
        openKey: "sub3",
        selectedKey: "4"      
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  navReducer
})

export default rootReducer;