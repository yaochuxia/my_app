import {applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk'
import reducers from '../reducer';

const middleware = [
  thunk
]

/**
 * 2. 创建store
 */

 export default createStore(reducers, applyMiddleware(...middleware))