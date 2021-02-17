import React from "react";
import styles from "./styles.module.css";
import Button from "@material-ui/core/Button";

class ScheduleBox extends React.Component {
  render() {
    return (
      <Button
        className={
          this.props.count === 0
            ? styles.scheduleBox
            : styles.scheduleBoxUnder600
        }
      >
        Schedule
      </Button>
    );
  }
}

export default ScheduleBox;
