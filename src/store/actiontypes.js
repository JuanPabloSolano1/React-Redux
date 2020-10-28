export const INCREMENT = 'INCREMENT';
export const DECREASE = 'DECREASE';
export const INCREMENT_FIVE = 'INCREMENT_FIVE';
export const DECREASE_FIVE = 'DECREASE_FIVE';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increase = () => {
  return {
    type: INCREMENT,
  };
};

export const decrease = () => {
  return {
    type: DECREASE,
  };
};

export const increment_five = (value) => {
  return {
    type: INCREMENT_FIVE,
    value: value,
  };
};

export const decrease_five = (value) => {
  return {
    type: DECREASE_FIVE,
    value: value,
  };
};

export const save_result = (result) => {
  return {
    type: STORE_RESULT,
    result: result,
  };
};

export const store_result = (result) => {
  return (dispatch) => {
    setInterval(() => {
      dispatch(save_result(result));
    }, 2000);
  };
};

export const delete_result = (result_id) => {
  return {
    type: DELETE_RESULT,
    result_id: result_id,
  };
};
