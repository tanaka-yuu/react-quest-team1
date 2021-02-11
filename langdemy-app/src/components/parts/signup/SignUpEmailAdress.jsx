import React from "react";
import TextField from "@material-ui/core/TextField";

class SignUpEmailAdress extends React.Component {
  render() {
    return (
      <TextField
        variant="outlined"
        required
        fullWidth
        id="email"
        label="Email Adress"
        name="email"
      />
    );
  }
}

export default SignUpEmailAdress;
