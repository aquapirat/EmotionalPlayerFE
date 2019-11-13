import { combineReducers } from 'redux';

import applicationReducer from './applicationReducer';

const allReducers = combineReducers({
  application: applicationReducer,
});

export default allReducers;
