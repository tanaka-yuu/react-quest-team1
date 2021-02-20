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

registerLocale("ja", ja);
const localizer = momentLocalizer(moment);

class Calender1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.test = this.test.bind(this);
    this.state = {
      isOpen: false,
      events: this.props.state,
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
    console.log(moment("2021-02-20T07:07").utc().format());
    console.log(moment("2021-02-22T07:07").utc().format());
    console.log(this.props.state);
  }

  render() {
    console.log("bbbbbbbbbbbbbbbbbb");
    console.log(this.props.state);
    const eventlist = this.props.state
      .filter((event) => event)
      .map((event) => ({
        ...event,
        start: new Date(event.startTime),
        end: moment(event.endTime).utc().format(),
      }));
    console.log(eventlist);
    // console.log(eventlist[0].end);
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calender1);
