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

  const [firstName, setFirstName] = useState(""),
    [lastName, setLastName] = useState(""),
    [emailAddress, setEmailAddress] = useState(""),
    [password, setPassword] = useState("");

  const inputFirstName = useCallback(
    (event) => {
      setFirstName(event.target.value);
    },
    [setFirstName]
  );

  const inputLastName = useCallback(
    (event) => {
      setLastName(event.target.value);
    },
    [setLastName]
  );

  const inputEmailAddress = useCallback(
    (event) => {
      setEmailAddress(event.target.value);
    },
    [setEmailAddress]
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
                  name={"firstName"}
                  id={"firstName"}
                  label={"First Name"}
                  type={"text"}
                  value={firstName}
                  onChange={inputFirstName}
                  autoFocus={true}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextInput
                  name={"lastName"}
                  id={"lastName"}
                  label={"Last Name"}
                  type={"text"}
                  value={lastName}
                  onChange={inputLastName}
                  autoFocus={false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  name={"email"}
                  id={"email"}
                  label={"Email Address"}
                  type={"email"}
                  value={emailAddress}
                  onChange={inputEmailAddress}
                  autoFocus={false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  name={"password"}
                  id={"password"}
                  label={"Password"}
                  type={"password"}
                  value={password}
                  onChange={inputPassword}
                  autoFocus={false}
                />
              </Grid>
              <PrimaryButton
                // type={"submit"}
                fullWidth={true}
                label={"Sign up!"}
                onClick={() => dispatch(signUpFunc(firstName, lastName, emailAddress, password))}
              />
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
