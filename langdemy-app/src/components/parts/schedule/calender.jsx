import React from "react";
import DatePicker from "react-datepicker";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import moment from "moment/moment.js";
import ja from "date-fns/locale/ja";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import "react-datepicker/dist/react-datepicker.css";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Body from "./Body";

registerLocale("ja", ja);
const localizer = momentLocalizer(moment);

class calender extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.parseAsMoment = this.parseAsMoment.bind(this);
    this.toUtcIso8601str = this.toUtcIso8601str.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  state = {
    startDate: new Date(),
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

  handleChange(date) {
    let date1 = date.moment().format("YYYY/MM/DD");
    this.setState({
      startDate: date1,
    });
    console.log(this.state.startDate);
    console.log(date1);
  }

  parseAsMoment(dateTimeStr) {
    return moment.utc(dateTimeStr, "YYYY-MM-DDTHH:mm:00Z", "ja").utcOffset(9);
  }

  toUtcIso8601str(momentInstance) {
    return momentInstance.clone().utc().format("YYYY-MM-DDTHH:mm:00Z");
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
    return (
      <div>
        <div
          style={{
            height: "10vh",
            width: "100%",
            maxWidth: "100%",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Button
            variant="outlined"
            style={{ marginLeft: "10px" }}
            onClick={this.handleOpen}
          >
            予約する
          </Button>
          <Button variant="outlined" style={{ marginLeft: "10px" }}>
            変更する
          </Button>
          <Button variant="outlined" style={{ marginLeft: "10px" }}>
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
          {/* <DatePicker
            locale="ja"
            selected={moment(this.state.startDate).toDate()}
            onChange={this.handleChange}
            withPortal
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            customInput={
              <Button variant="outlined">
                {this.parseAsMoment(this.state.startDate).format("YYYY/MM/DD")}
              </Button>
            }
          /> */}
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
export default calender;
