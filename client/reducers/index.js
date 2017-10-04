import {combineReducers} from 'redux';
import app from './appReducer';
import product from './productReducer';

const rootReducer = combineReducers({
  app,
  product
});

export default rootReducer;