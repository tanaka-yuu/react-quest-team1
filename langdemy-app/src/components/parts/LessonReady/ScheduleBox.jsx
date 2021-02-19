import React from "react";
import styles from "./styles.module.css";
import Button from "@material-ui/core/Button";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

const ScheduleBox = (props) => {
  const dispatch = useDispatch();
  return (
    <Button
      className={
        props.count === 0 ? styles.scheduleBox : styles.scheduleBoxUnder600
      }
      onClick={() => dispatch(push("/schedule"))}
    >
      Schedule
    </Button>
  );
};

export default ScheduleBox;
