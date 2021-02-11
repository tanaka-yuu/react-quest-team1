import React from "react";
import styles from "./styles.module.css";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

class SignInAvatar extends React.Component {
  render() {
    return (
      <Avatar className={styles.icon}>
        <LockOutlinedIcon />
      </Avatar>
    );
  }
}

export default SignInAvatar;
