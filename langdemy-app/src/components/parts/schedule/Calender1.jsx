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
import { appointmentAction, storeSchedule, getSchedule } from "../../../reducks/schedule/schedule.module";

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
    this.state = {
      isOpen: false,
      events: this.props.state,
    };
    
  }

  componentWillMount() {
    this.props.getSchedule();
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

  render() {
    console.log(this.props.state);
    const eventlist = this.props.state
      .filter((event) => event)
      .map((event) => ({
        ...event,
        name: event.name,
        start: new Date(moment(event.startTime)),
        end: new Date(moment(event.endTime)),
      }));
    console.log(eventlist);
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
          defaultDate={new Date()}
          // startAccessor={this.startAccessor}
          // endAccessor={this.endAccessor}
          defaultView="month"
          events={eventlist}
          style={{ height: "90vh" }}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    state: state.schedule.reserveList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appointmentAction: (appointment) =>
      dispatch(appointmentAction(appointment)),
    storeSchedule: (appointment) =>
      dispatch(storeSchedule(appointment)),
    getSchedule: () =>
      dispatch(getSchedule()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calender1);