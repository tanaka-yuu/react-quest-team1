// reduxの関数の宣言
export const ONCHANGE_FIRSTNAME = "ONCHANGE_FIRSTNAME";
export const ONCHANGE_LASTNAME = "ONCHANGE_LASTNAME";
export const ONCHANGE_EMAIL_ADDRESS = "ONCHANGE_EMAIL_ADDRESS";
export const ONCHANGE_PASSWORD = "ONCHANGE_PASSWORD";

// stateを渡すactionの処理
export const updateFirstName = (userState) => {
  return {
    type: "ONCHANGE_FIRSTNAME",
    payload: {
      firstName: userState.value,
    },
  };
};

export const updateLastName = (userState) => {
  return {
    type: "ONCHANGE_LASTNAME",
    payload: {
      lastName: userState.value,
    },
  };
};

export const updateEmailAddress = (userState) => {
  return {
    type: "ONCHANGE_EMAIL_ADDRESS",
    payload: {
      emailAddress: userState.value,
    },
  };
};

export const updatePassword = (userState) => {
  return {
    type: "ONCHANGE_PASSWORD",
    payload: {
      password: userState.value,
    },
  };
};
