export const SCHEDULE_APPOINTMENT = "SCHEDULE_APPOINTMENT";
export const appointmentAction = (appointment) => {
  return {
    type: SCHEDULE_APPOINTMENT,
    payload: appointment,
  };
};
