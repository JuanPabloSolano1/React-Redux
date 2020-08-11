import * as actionTypes from '../store/actiontypes';

const initialState = {
  counter: 0,
  results: [],
};

export const reducer = (state = initialState, action) => {
  // IF Possibility
  // if (action.type === 'INCREMENT') {
  //   return {
  //     counter: state.counter + 1,
  //   };
  // }
  // if (action.type === 'DECREASE') {
  //   return {
  //     counter: state.counter - 1,
  //   };
  // }
  // if (action.type === 'INCREMENT_FIVE') {
  //   return {
  //     counter: state.counter + action.value,
  //   };
  // }
  // if (action.type === 'DECREASE_FIVE') {
  //   return {
  //     counter: state.counter - action.value,
  //   };
  // }
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
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        (element) => element.id !== action.result_id
      );
      return {
        ...state,
        results: updatedArray,
      };
    default:
      return state;
  }
};
