/* @flow */

import thunkMiddleware from 'redux-thunk';
//import apiMiddleware from './apiMiddleware';
import loggerMiddleware from './loggerMiddleware';

// define store middlewares as an array
export default [
  thunkMiddleware,
  //apiMiddleware,
  loggerMiddleware
];
