import initialState from "../store/initialState";
import { SCHEDULE_APPOINTMENT } from "./action";

const reducer = (state = initialState.schedule, action) => {
  switch (action.type) {
    case SCHEDULE_APPOINTMENT:
      console.log(state);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
