import { SET_SIDEBAR } from "../types";

const initialState = {
  open: true
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SIDEBAR:
      return { ...state, open: action.open };
    default:
      return state;
  }
}
