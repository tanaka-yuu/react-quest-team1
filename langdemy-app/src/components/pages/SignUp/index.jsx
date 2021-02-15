import React, { useState, useCallback } from "react";
import Container from "@material-ui/core/Container";
import styles from "./styles.module.css";
import Grid from "@material-ui/core/Grid";
import SignUpAvatar from "../../parts/signup/SignUpAvatar";
import SignUpTypography from "../../parts/signup/SignUpTypography";
import PrimaryButton from "../../parts/global/PrimaryButton";
import TextInput from "../../parts/global/TextInput";
import { signUpFunc } from "./operations";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputUserName = useCallback(
    (event) => {
      setUserName(event.target.value);
    },
    [setUserName]
  );

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
    <div>
      <Container component="main" maxWidth="sm">
        <div className={styles.mainbox}>
          <SignUpAvatar />
          <SignUpTypography />
          <form className={styles.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextInput
                  name={"userName"}
                  id={"userName"}
                  label={"ユーザーネーム"}
                  type={"text"}
                  value={userName}
                  onChange={inputUserName}
                  autoFocus={true}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  name={"email"}
                  id={"email"}
                  label={"メールアドレス"}
                  type={"email"}
                  value={email}
                  onChange={inputEmail}
                  autoFocus={false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  name={"password"}
                  id={"password"}
                  label={"パスワード"}
                  type={"password"}
                  value={password}
                  onChange={inputPassword}
                  autoFocus={false}
                />
              </Grid>
              <PrimaryButton
                // type={"submit"}
                fullWidth={true}
                label={"会員登録する"}
                onClick={() => dispatch(signUpFunc(userName, email, password))}
              />
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
