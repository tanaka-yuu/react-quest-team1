export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: userState,
  };
};

export const SIGN_UP = "SIGN_UP";
export const signUpAction = (userState) => {
  return {
    type: "SIGN_UP",
    payload: userState,
  };
};