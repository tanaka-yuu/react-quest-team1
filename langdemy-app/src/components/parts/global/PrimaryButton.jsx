import React from "react";
import styles from "../signup/styles.module.css";
import Button from "@material-ui/core/Button";

const PrimaryButton = (props) => {
  return (
    <Button
      type={props.type}
      fullWidth={props.fullWidth}
      variant="contained"
      color="primary"
      className={styles.submit}
      onClick={() => props.onClick()}
    >
      {props.label}
    </Button>
  );
};

export default PrimaryButton;
