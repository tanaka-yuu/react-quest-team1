const initialState = {
  users: {
    isSignedIn: false,
    uid: "",
    role: "",
    userName: "",
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
