import {
  OPEN_SIDE_BAR,
  CLOSE_SIDE_BAR,
  TOGGLE_SIDE_BAR
} from "../actions/index";

const INITIAL_STATE = { visible: false };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_SIDE_BAR:
      return { ...state, visible: true };
    case CLOSE_SIDE_BAR:
      return { ...state, visible: false };
    case TOGGLE_SIDE_BAR:
      return { ...state, visible: !state.visible };
    default:
      return state;
  }
}
