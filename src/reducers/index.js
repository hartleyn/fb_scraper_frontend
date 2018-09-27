// file: src/reducers/index.js
import { combineReducers } from 'redux';
import {reducer as burgerMenu} from 'redux-burger-menu';
import statsReducer from './statsReducer';
import blogReducer from './blogReducer';
import resultsTableReducer from './resultsTableReducer';


const appReducer = combineReducers({
  stats: statsReducer,
  blog: blogReducer,
  resultsTable: resultsTableReducer,
  burgerMenu,
})


const rootReducer = (state, action) => {
  return appReducer(state, action);
}


export default rootReducer;
