import React from "react";
import styles from "./styles.module.css";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classTime: 40,
    };
    this.classTimeHandleChange = this.classTimeHandleChange.bind(this);
  }

  render() {
    return (
      <div className={styles.body}>
        <h2>予約する</h2>
        <div style={{ display: "flex" }}>
          <form noValidate>
            <TextField
              id="datetime-local"
              label="Next appointment"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: "200px", marginRight: "10px" }}
            />
          </form>
          <FormControl style={{ width: "100px" }}>
            <InputLabel>授業時間</InputLabel>
            <Select value={this.state.classTime}>
              <MenuItem value={40} onClick={this.classTimeHandleChange}>
                40分
              </MenuItem>
              <MenuItem value={60} onClick={this.classTimeHandleChange}>
                60分
              </MenuItem>
              <MenuItem value={80} onClick={this.classTimeHandleChange}>
                80分
              </MenuItem>
              <MenuItem value={100}>100分</MenuItem>
              <MenuItem value={120}>120分</MenuItem>
              <MenuItem value={140}>140分</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" style={{ marginLeft: "10px" }}>
            決定
          </Button>
        </div>
      </div>
    );
  }
}

export default Body;
