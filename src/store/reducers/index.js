import { combineReducers } from 'redux';

import applicationReducer from './applicationReducer';
import soundReducer from './soundReducer';

const allReducers = combineReducers({
  application: applicationReducer,
  sound: soundReducer,
});

export default allReducers;
