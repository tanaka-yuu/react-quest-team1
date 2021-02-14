
export const ONCHANGE_FIRSTNAME = "ONCHANGE_FIRSTNAME";
export const setFirstName = (userState) => {
  return {
    type: "ONCHANGE_FIRSTNAME",
    payload: {
      firstName: userState.value,
    },
  };
};

export const ONCHANGE_LASTNAME = "ONCHANGE_LASTNAME";
export const setLastName = (userState) => {
  return {
    type: "ONCHANGE_LASTNAME",
    payload: {
      lastName: userState.value,
    },
  };
};

export const ONCHANGE_EMAIL_ADDRESS = "ONCHANGE_EMAIL_ADDRESS";
export const setEmailAddress = (userState) => {
  return {
    type: "ONCHANGE_EMAIL_ADDRESS",
    payload: {
      emailAddress: userState.value,
    },
  };
};

export const ONCHANGE_PASSWORD = "ONCHANGE_PASSWORD";
export const setPassword = (userState) => {
  return {
    type: "ONCHANGE_PASSWORD",
    payload: {
      password: userState.value,
    },
  };
};

export const SIGN_UP = "SIGN_UP";
export const signUpAction = (userState) => {
  return {
    type: "SIGN_UP",
    payload: {
      ...userState,
    }
  }
}
