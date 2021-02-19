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
      events: [
        {
          start: moment().toDate(),
          end: moment().add(1, "days").toDate(),
          title: "Some title",
        },
        {
          start: moment().toDate(),
          end: moment().add(1, "days").toDate(),
          title: "Some title",
        },
      ],
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
    console.log(this.props);
  }

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
          events={this.state.events}
          style={{ height: "90vh" }}
        />
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Calender1);

export { Calender1 };
