import { SET_USERS, SET_EDITING_USER } from "../actions/index";

const INITIAL_STATE = { array: null, editing: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USERS:
      return { ...state, array: action.payload };
    // case EDIT_USER:
    //   return { ...state, array: action.payload };
    case SET_EDITING_USER:
      return { ...state, editing: action.payload };

    default:
      return state;
  }
}
