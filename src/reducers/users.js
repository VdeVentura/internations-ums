import { SET_USERS } from "../actions/index";

const INITIAL_STATE = { array: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USERS:
      return { ...state, array: action.payload };

    default:
      return state;
  }
}
