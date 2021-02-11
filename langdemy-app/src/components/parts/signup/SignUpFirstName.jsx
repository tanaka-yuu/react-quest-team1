import React from "react";
import TextField from "@material-ui/core/TextField";

class SignUpFirstName extends React.Component {
  render() {
    return (
      <TextField
        name="firstName"
        variant="outlined"
        required
        fullWidth
        id="firstName"
        label="First Name"
        autoFocus
      />
    );
  }
}

export default SignUpFirstName;
