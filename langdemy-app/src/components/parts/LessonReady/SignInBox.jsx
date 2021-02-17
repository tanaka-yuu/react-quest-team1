import React from "react";
import styles from "./styles.module.css";
import Button from "@material-ui/core/Button";

class SignInBox extends React.Component {
  render() {
    return (
      <Button
        className={
          this.props.count === 0 ? styles.signInBox : styles.signInBoxUnder600
        }
      >
        SignIn
      </Button>
    );
  }
}

export default SignInBox;
