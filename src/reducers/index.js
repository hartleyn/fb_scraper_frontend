// file: src/reducers/index.js
import { combineReducers } from 'redux';
import statsReducer from './statsReducer';


const appReducer = combineReducers({
  stats: statsReducer,
})


const rootReducer = (state, action) => {
  return appReducer(state, action);
}


export default rootReducer;
