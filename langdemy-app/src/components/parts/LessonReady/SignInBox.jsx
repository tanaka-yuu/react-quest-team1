import React from "react";
import styles from "./styles.module.css";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const SignInBox = (props) => {
  const dispatch = useDispatch();
  return (
    <Button
      className={
        props.count === 0 ? styles.signInBox : styles.signInBoxUnder600
      }
      onClick={() => dispatch(push("signin"))}
    >
      SignIn
    </Button>
  );
};

export default SignInBox;
