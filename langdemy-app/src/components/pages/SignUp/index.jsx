import React from "react";
import Container from "@material-ui/core/Container";
import styles from "./styles.module.css";
import Grid from "@material-ui/core/Grid";
import SignUpAvatar from "../../parts/signup/SignUpAvatar";
import SignUpTypography from "../../parts/signup/SignUpTypography";
import SignUpFirstName from "../../parts/signup/SignUpFirstName";
import SignUpSecondName from "../../parts/signup/SignUpSecondName";
import SignUpEmailAdress from "../../parts/signup/SignUpEmailAdress";
import SignUpPassword from "../../parts/signup/SignUpPassword";
import SignUpButton from "../../parts/signup/SignUpButton";

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <Container component="main" maxWidth="sm">
          <div className={styles.mainbox}>
            <SignUpAvatar />
            <SignUpTypography />
            <form className={styles.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <SignUpFirstName />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SignUpSecondName />
                </Grid>
                <Grid item xs={12}>
                  <SignUpEmailAdress />
                </Grid>
                <Grid item xs={12}>
                  <SignUpPassword />
                </Grid>
                <SignUpButton />
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default SignUp;
