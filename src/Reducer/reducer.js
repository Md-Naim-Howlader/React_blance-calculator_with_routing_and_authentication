import { ADD_TRANSECTION, DELETE_TRANSECTION } from "./actionsType";

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TRANSECTION:
      return {
        ...state,
        transections: [...state.transections, action.payload],
      };
    case DELETE_TRANSECTION:
      return {
        ...state,
        transections: [...state.transections].filter(
          (transection) => transection.id !== payload
        ),
      };

    default:
      return state;
  }
};
