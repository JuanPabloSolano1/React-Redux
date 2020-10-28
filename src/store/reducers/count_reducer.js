import * as actionTypes from '../../store/actiontypes';

const initialState = {
  counter: 0,
};

export const count_reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.INCREMENT_FIVE:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionTypes.DECREASE_FIVE:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    default:
      return state;
  }
};

export default count_reducer;
