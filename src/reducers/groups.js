import { SET_GROUPS, SET_EDITING_GROUP } from "../actions/index";

const INITIAL_STATE = { array: null, editing: null };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_GROUPS:
      return { ...state, array: action.payload };
    case SET_EDITING_GROUP:
      return { ...state, editing: action.payload };

    default:
      return state;
  }
}
