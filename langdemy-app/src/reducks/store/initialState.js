const initialState = {
  users: {
    isSignedIn: false,
    uid: "",
    role: "",
    userName: "",
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
