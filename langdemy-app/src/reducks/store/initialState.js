const initialState = {
  users: {
    isSignedIn: false,
    uid: "",
    role: "",
    userName: "",
    email: "",
    password: "",
  },
  schedule: {
    classTime: null,
    name: "",
    startTime: null,
    endTime: null,
  },
  lessonReady: {
    isStartTime: false,
    joinUrl: "",
  },
};

export default initialState;
