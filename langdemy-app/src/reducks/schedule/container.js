import { connect } from "react-redux";
import Body from "../../components/parts/schedule/Body";
import Calender1 from "../../components/parts/schedule/Calender1";
import { appointmentAction } from "./action";

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appointmentAction: (appointment) =>
      dispatch(appointmentAction(appointment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body, Calender1);
