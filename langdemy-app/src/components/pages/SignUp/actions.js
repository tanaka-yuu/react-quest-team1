export const SIGN_UP = "SIGN_UP";
export const signUpAction = (userState) => {
  return {
    type: "SIGN_UP",
    payload: userState,
  };
};
