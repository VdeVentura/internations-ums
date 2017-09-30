export const OPEN_SIDE_BAR = "OPEN_SIDE_BAR";
export const CLOSE_SIDE_BAR = "CLOSE_SIDE_BAR";
export const TOGGLE_SIDE_BAR = "TOGGLE_SIDE_BAR";

export function openSideBar() {
  return {
    type: OPEN_SIDE_BAR
  };
}
export function closeSideBar() {
  return {
    type: CLOSE_SIDE_BAR
  };
}
export function toggleSideBar() {
  return {
    type: TOGGLE_SIDE_BAR
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
