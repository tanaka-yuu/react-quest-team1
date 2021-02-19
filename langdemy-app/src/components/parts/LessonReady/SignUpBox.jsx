import React from "react";
import styles from "./styles.module.css";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const SignUpBox = (props) => {
  const dispatch = useDispatch();
  return (
    <Button
      className={
        props.count === 0 ? styles.signUpBox : styles.signUpBoxUnder600
      }
      onClick={() => dispatch(push("signup"))}
    >
      SignUp
    </Button>
  );
};

export default SignUpBox;
