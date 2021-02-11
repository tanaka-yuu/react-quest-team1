import React from "react";
import TextField from "@material-ui/core/TextField";

class SignUpPassword extends React.Component {
  render() {
    return (
      <TextField
        variant="outlined"
        required
        fullWidth
        type="password"
        id="password"
        label="Password"
        name="password"
      />
    );
  }
}

export default SignUpPassword;
