import { combineReducers } from 'redux-immutable';

import loginReducer from './loginreducer';

const allReducer = combineReducers({
  login: loginReducer
})

export default allReducer