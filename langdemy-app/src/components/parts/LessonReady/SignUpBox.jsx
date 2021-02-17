import React from "react";
import styles from "./styles.module.css";
import Button from "@material-ui/core/Button";

class SignUpBox extends React.Component {
  render() {
    return (
      <Button
        className={
          this.props.count === 0 ? styles.signUpBox : styles.signUpBoxUnder600
        }
      >
        Sign up
      </Button>
    );
  }
}

export default SignUpBox;
