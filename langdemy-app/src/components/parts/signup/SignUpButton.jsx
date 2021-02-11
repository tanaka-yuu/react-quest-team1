import React from "react";
import styles from "./styles.module.css";
import Button from "@material-ui/core/Button";

class SignUpButton extends React.Component {
  render() {
    return (
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={styles.submit}
      >
        Sign up
      </Button>
    );
  }
}

export default SignUpButton;
