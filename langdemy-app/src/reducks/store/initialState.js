const initialState = {
  users: {
    isSignedIn: false,
    uid: "",
    role: "",
    userName: "",
    email: "",
    password: "",
  },
  html: "",
  schedule: {
    classTime: null,
    name: "",
    startTime: null,
    endTime: null,
  },
};

export default initialState;
