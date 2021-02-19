import React from "react";
import { connect } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { registerLocale } from "react-datepicker";
import moment from "moment/moment.js";
import ja from "date-fns/locale/ja";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from "@material-ui/core/Button";
import styles from "./styles.module.css";
import Modal from "@material-ui/core/Modal";
import Body from "./Body";
import { appointmentAction } from "../../../reducks/schedule/schedule.module";
import { accessor } from "react-big-calendar/lib/utils/accessors";

registerLocale("ja", ja);
const localizer = momentLocalizer(moment);
// const localizer = BigCalendar.momentLocalizer(moment);
// export const convertDateTimeToDate = (datetime, timeZoneName) => {
//   const m = moment.tz(datetime, timeZoneName);
//   return new Date(m.year(), m.month(), m.date(), m.hour(), m.minute(), 0);
// };

class Calender1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.test = this.test.bind(this);
    this.state = {
      isOpen: false,
      // events: this.props.state,
    };
  }

  handleOpen() {
    this.setState({
      isOpen: true,
    });
  }

  handleClose() {
    this.setState({
      isOpen: false,
    });
  }

  test() {
    const { appointmentAction } = this.props;
    appointmentAction();
    console.log(this.props.state[0].name);
  }

  // startAccessor = (event) => {
  //   return convertDateTimeToDate(accessor(event, "start"), this.props.timeZone);
  // };

  // endAccessor = (event) => {
  //   return convertDateTimeToDate(accessor(event, "end"), this.props.timeZone);
  // };

  render() {
    return (
      <div>
        <div className={styles.wrapperBox}>
          <Button
            variant="outlined"
            className={styles.button}
            onClick={this.handleOpen}
          >
            予約する
          </Button>
          <Button
            variant="outlined"
            className={styles.button}
            onClick={this.test}
          >
            変更する
          </Button>
          <Button variant="outlined" className={styles.button}>
            キャンセル
          </Button>
          <p></p>
          <Modal
            open={this.state.isOpen}
            onClose={this.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Body />
          </Modal>
        </div>
        <Calendar
          localizer={localizer}
          // defaultDate={new Date()}
          startAccessor={this.startAccessor} // startAccessorはタイムゾーンを動的に変化させるため、関数をセット
          endAccessor={this.endAccessor} // endAccessorはタイムゾーンを動的に変化させるため、関数をセット
          defaultView="month"
          events={this.state.events}
          style={{ height: "90vh" }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // classTime: state.schedule.classTime,
    // name: state.schedule.name,
    // startTime: state.schedule.startTime,
    // endTime: state.schedule.endTime,
    state: state.schedule.reserveList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appointmentAction: (appointment) =>
      dispatch(appointmentAction(appointment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calender1);
