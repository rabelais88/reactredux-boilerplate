import cloneDeep from 'lodash/cloneDeep';
import { createStore } from 'redux';
import { ADD, SUBTRACT } from './actionTypes';

const reducer = (state, action) => {
  // init
  if (!state) state = { 
    num: 0,
    histories: [],
  };

  const newState = cloneDeep(state);
  switch (action.type) {
    case ADD:
      newState.num += action.value;
      newState.histories.push(`add ${action.value}`);
      break;
    case SUBTRACT:
      newState.num -= action.value;
      newState.histories.push(`subtract ${action.value}`);
      break;
    default:
      return newState;
  }
  return newState;
};

// adding redux store watcher
export default createStore(reducer, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());