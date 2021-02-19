const initialState = {
  users: {
    isSignedIn: false,
    uid: "",
    role: "",
    userName: "",
    email: "",
    password: "",
  },
  lessonReady: {
    isStartTime: false,
    joinUrl: "",
  },
  schedule: {
    reserveList: [],
  },
};

export default initialState;
