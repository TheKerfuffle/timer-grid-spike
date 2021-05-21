import { combineReducers } from 'redux';

import timer from './timer.reducer.js';


const rootReducer = combineReducers({
  timer,
});

export default rootReducer;
