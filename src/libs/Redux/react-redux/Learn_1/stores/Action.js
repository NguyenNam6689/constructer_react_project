import * as types from './ActionType';

export const ADD_TODO = (todo) => async (dispatch) => {
  dispatch({ type: types.ADD_TODO_PENDING });
  try {
    const result = await todo;
    dispatch({
      type: types.ADD_TODO_SUCCESS,
      payload: result,
    });
  } catch (error) {
    console.info(error.message);
    dispatch({
      type: types.ADD_TODO_ERROR,
      payload: error.message,
    });
  }
};
export const REMOVE_TODO = (todo) => async (dispatch) => {
  dispatch({ type: types.REMOVE_TODO_PENDING });
  try {
    const result = await todo;
    dispatch({
      type: types.ADD_TODO_SUCCESS,
      payload: result,
    });
  } catch (error) {
    console.info(error.message);
    dispatch({
      type: types.REMOVE_TODO_ERROR,
      payload: error.message,
    });
  }
};
