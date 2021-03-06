import React from "react";
import styles from "./styles.module.css";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import { appointmentAction, storeSchedule } from "../../../reducks/schedule/schedule.module";
import { connect } from "react-redux";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classTime: 40,
      title: "",
      startTime: moment().format("YYYY-MM-DDTHH:mm"),
      endTime: null,
    };

    this.classTimeHandleChange = this.classTimeHandleChange.bind(this);
    this.datepickerHandleChange = this.datepickerHandleChange.bind(this);
    this.titleHandleChange = this.titleHandleChange.bind(this);
    this.clickDoAction = this.clickDoAction.bind(this);
  }

  classTimeHandleChange(e) {
    this.setState(() => ({
      classTime: e.target.value,
    }));
    console.log(e.target.value);
  }

  titleHandleChange(e) {
    this.setState(() => ({
      title: e.target.value,
      endTime: moment(this.state.startTime)
        .add(this.state.classTime, "m")
        .format("YYYY-MM-DD-HH:mm"),
    }));
  }

  datepickerHandleChange(e) {
    this.setState(() => ({
      startTime: e.target.value,
    }));
  }

  clickDoAction() {
    const { storeSchedule } = this.props;
    const appointment = this.state;
    console.log(this.state);
    storeSchedule(appointment);
    return this.props.handleClose();
  }

  componentWillMount() {
    this.props.appointmentAction();
  }

  render() {
    const value = [40, 60, 80, 100, 120, 140];
    return (
      <div className={styles.body} tabIndex={0}>
        <h2>予約する</h2>
        <p>{this.state.endTime}</p>
        <div style={{ display: "flex" }}>
          <form noValidate>
            <TextField
              label="日にち"
              type="datetime-local"
              defaultValue={this.state.startTime}
              style={{ width: "200px", marginRight: "10px" }}
              onChange={this.datepickerHandleChange}
            />
          </form>
          <FormControl style={{ width: "100px" }}>
            <InputLabel>授業時間</InputLabel>
            <Select
              value={this.state.classTime}
              onChange={this.classTimeHandleChange}
            >
              {value.map((value) => (
                <MenuItem value={value} key={value}>
                  {value}分
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="名前"
            style={{ marginLeft: "10px" }}
            onChange={this.titleHandleChange}
          />
          <Button
            variant="outlined"
            style={{ marginLeft: "10px" }}
            onClick={this.clickDoAction}
          >
            決定
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.schedule.endTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appointmentAction: (appointment) =>
      dispatch(appointmentAction(appointment)),
    storeSchedule: (appointment) =>
      dispatch(storeSchedule(appointment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);

export { Body };