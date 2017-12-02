import { SHOW_FILTER } from "../types";

export const showFilter = openFilter => {
  return dispatch => {
    dispatch({ type: SHOW_FILTER, openFilter });
  };
};
