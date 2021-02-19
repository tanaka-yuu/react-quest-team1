const initialState = {
  users: {
    isSignedIn: false,
    uid: "",
    role: "",
    userName: "",
  },
  schedule: {
    reserveList: [],
  },
  lessonReady: {
    isStartTime: false,
    joinUrl: "",
  },
};

export default initialState;
