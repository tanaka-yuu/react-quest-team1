import React from "react";
import styles from "./styles.module.css";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import moment from "moment";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classTime: 40,
      name: "",
      defaultValue: moment().format("YYYY-MM-DDTHH:mm"),
      startTime: null,
    };

    this.classTimeHandleChange = this.classTimeHandleChange.bind(this);
    this.datepickerHandleChange = this.datepickerHandleChange.bind(this);
    this.nameHandleChange = this.nameHandleChange.bind(this);
  }

  classTimeHandleChange(e) {
    this.setState(() => ({
      classTime: e.target.value,
    }));
    console.log(e.target.value);
  }

  nameHandleChange(e) {
    this.setState(() => ({
      name: e.target.value,
    }));
    console.log(this.state.name);
  }

  datepickerHandleChange(e) {
    this.setState(() => ({
      startTime: e.target.value,
    }));
    console.log(this.state);
  }

  render() {
    const value = [40, 60, 80, 100, 120, 140];
    return (
      <div className={styles.body} tabIndex={0}>
        <h2>予約する</h2>
        <p>{this.state.startTime}</p>
        <div style={{ display: "flex" }}>
          <form noValidate>
            <TextField
              label="日にち"
              type="datetime-local"
              defaultValue={this.state.defaultValue}
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
            onChange={this.nameHandleChange}
          />
          <Button variant="outlined" style={{ marginLeft: "10px" }}>
            決定
          </Button>
        </div>
      </div>
    );
  }
}

export default Body;
