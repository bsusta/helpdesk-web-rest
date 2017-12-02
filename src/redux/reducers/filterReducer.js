import { SHOW_FILTER } from "../types";

const initialState = {
  openFilter: true
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_FILTER:
      return { ...state, openFilter: action.openFilter };
    default:
      return state;
  }
}
