import { ADD_TRANSECTION, DELETE_TRANSECTION } from "./actionsType";

export const addTransection = (dispatch, transection) => {
  dispatch({ type: ADD_TRANSECTION, payload: transection });
};
export const deleteTransection = (dispatch, id) => {
  dispatch({ type: DELETE_TRANSECTION, payload: id });
};
