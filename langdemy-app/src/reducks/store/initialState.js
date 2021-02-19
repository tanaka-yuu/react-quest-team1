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
    classTime: null,
    name: "",
    startTime: null,
    endTime: null,
  },
};

export default initialState;
