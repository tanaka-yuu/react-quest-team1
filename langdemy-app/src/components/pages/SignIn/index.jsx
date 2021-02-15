import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import TextInput from "../../parts/global/TextInput";
import PrimaryButton from "../../parts/global/PrimaryButton";
import { signInFunc } from "./operetions";

const SignIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <div className={styles.mainbox}>
          <Avatar className={styles.icon}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={styles.form} noValidate>
            <TextInput
              name={"email"}
              id={"email"}
              label={"メールアドレス"}
              type={"email"}
              value={email}
              onChange={inputEmail}
              autoFocus={false}
            />
            <TextInput
              name={"password"}
              id={"password"}
              label={"パスワード"}
              type={"password"}
              value={password}
              onChange={inputPassword}
              autoFocus={false}
            />
            <PrimaryButton
              // type={"submit"}
              fullWidth={true}
              label={"サインイン"}
              onClick={() => dispatch(signInFunc(email, password))}
            />
          </form>
          <Link variant="body2" to="/signup">
            新規登録はこちらから
          </Link>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default SignIn;
