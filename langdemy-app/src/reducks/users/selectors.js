import { createSelector } from "reselect";

const usersSelector = (state) => state.users;

export const getIsSignedIn = createSelector(
  [usersSelector],
  (state) => state.isSignedIn
);

export const getUserID = createSelector([usersSelector], (state) => state.uid);

export const getUserName = createSelector(
  [usersSelector],
  (state) => state.userName
);
