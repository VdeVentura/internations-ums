import { SET_GROUPS } from "../actions/index";

const INITIAL_STATE = { array: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_GROUPS:
      return { ...state, array: action.payload };

    default:
      return state;
  }
}
