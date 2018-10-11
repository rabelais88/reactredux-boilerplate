import cloneDeep from 'lodash/cloneDeep';
import { createStore } from 'redux';
import { ADD, SUBTRACT } from './actionTypes';

export default createStore((state, action) => {
  // init
  if (!state) state = { num: 0 };

  const newState = cloneDeep(state);
  switch (action.type) {
    case ADD:
      newState.num += action.value;
      break;
    case SUBTRACT:
      newState.num -= action.value;
      break;
    default:
      return newState;
  }
  return newState;
});