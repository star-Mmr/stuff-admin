import { Map } from 'immutable';
import * as actionTypes from '../constant/loginconst';

const defaultState = Map({
  count: 0
})

const reducer = function(state = defaultState,action) {
  switch(action.type) {
    case actionTypes.CHANGE_COUNT :
      return state.set('count',action.count)
    default:
      return state
  }
}

export default reducer