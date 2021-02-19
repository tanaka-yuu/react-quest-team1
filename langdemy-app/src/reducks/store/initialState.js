const initialState = {
  users: {
    isSignedIn: false,
    uid: "",
    role: "",
    userName: "",
    email: "",
    password: "",
  },
  schedule:{
    reserveList: [],
  },
  lessonReady: {
    isStartTime: false,
    joinUrl: "",
  },
};

export default initialState;
