import { createStore } from 'redux';
import rootReducer from '../reducers/sideNav-reducer';

const store = createStore(rootReducer);

export default store; 