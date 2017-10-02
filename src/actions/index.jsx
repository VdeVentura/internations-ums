import firebase from "../firebase";

export const SET_GROUPS = "SET_GROUPS";
export const CREATE_GROUP = "CREATE_GROUP";
export const SET_EDITING_GROUP = "SET_EDITING_GROUP";
export const EDIT_GROUP = "EDIT_GROUP";
export const DELETE_GROUP = "DELETE_GROUP";

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
export function createGroup(group) {
  return dispatch => {
    const groupsRef = firebase.database().ref("groups");
    groupsRef.push(group);
    dispatch({
      type: CREATE_GROUP,
      payload: group
    });
  };
}
export function editingGroup(group) {
  return {
    type: SET_EDITING_GROUP,
    payload: group
  };
}
export function editGroup(group) {
  return dispatch => {
    const groupsRef = firebase.database().ref("groups");
    groupsRef.child(group.key).set(group);
    dispatch({
      type: EDIT_GROUP,
      payload: group
    });
  };
}
export function deleteGroup(groupKey) {
  return dispatch => {
    const groupsRef = firebase.database().ref("groups");
    groupsRef.child(groupKey).remove();
    dispatch({
      type: DELETE_GROUP,
      payload: groupKey
    });
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
