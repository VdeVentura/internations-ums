import firebase from "../firebase";

export const SET_GROUPS = "SET_GROUPS";
export const SET_USERS = "SET_USERS";
export const CREATE_USER = "CREATE_USER";

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
    return {
      type: CREATE_USER,
      payload: user
    };
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
