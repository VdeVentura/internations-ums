import firebase from "../firebase";

export const SET_GROUPS = "SET_GROUPS";
export const SET_USERS = "SET_USERS";
export const CREATE_USER = "CREATE_USER";
export const SET_EDITING_USER = "SET_EDITING_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";

export function setGroups(groups) {
  return {
    type: SET_GROUPS,
    payload: groups
  };
}
export function setUsers(users) {
  return {
    type: SET_USERS,
    payload: users
  };
}

export function createUser(user) {
  return dispatch => {
    const usersRef = firebase.database().ref("users");
    usersRef.push(user);
    dispatch({
      type: CREATE_USER,
      payload: user
    });
  };
}
export function editingUser(user) {
  return {
    type: SET_EDITING_USER,
    payload: user
  };
}
export function editUser(user) {
  return dispatch => {
    const usersRef = firebase.database().ref("users");
    usersRef.child(user.key).set(user);
    dispatch({
      type: EDIT_USER,
      payload: user
    });
  };
}
export function deleteUser(userKey) {
  return dispatch => {
    const usersRef = firebase.database().ref("users");
    usersRef.child(userKey).remove();
    dispatch({
      type: DELETE_USER,
      payload: userKey
    });
  };
}

//
// export function setMissingPlayerDataWarning(missingData) {
//   return {
//     type: MISSING_PLAYER_DATA,
//     payload: missingData
//   };
// }
//
// export function clearMissingPlayerDataWarning(missingData) {
//   return {
//     type: MISSING_PLAYER_DATA
//   };
// }
//
// export function clearActivePlayer() {
//   return {
//     type: CLEAR_ACTIVE_PLAYER
//   };
// }
//
// // Sets the active season (the one the user is currently seeing)
// export function updateActiveSeason(season) {
//   return {
//     type: ACTIVE_SEASON_SELECTED,
//     payload: season
//   };
// }
//
// // Action being called when the user selects the category in which
// // he'll register his team (This happens in an early stage - prelogin)
// export function selectedCategory(categoryId) {
//   return {
//     type: SUBSCRIBE_TO_CATEGORY_SELECTED,
//     payload: categoryId
//   };
// }
