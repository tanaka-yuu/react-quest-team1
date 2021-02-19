import initialState from "../store/initialState";

const SCHEDULE_APPOINTMENT = "SCHEDULE_APPOINTMENT";
const appointmentAction = (appointment) => {
  return {
    type: SCHEDULE_APPOINTMENT,
    payload: appointment,
  };
};

const reducer = (state = initialState.schedule, action) => {
  switch (action.type) {
    case SCHEDULE_APPOINTMENT:
      console.log(state);
      return {
        state,
        reserveList: state.reserveList.concat([action.payload]),
      };
    default:
      return state;
  }
};

export default reducer;
export { appointmentAction };
