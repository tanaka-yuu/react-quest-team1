import React from "react";
import TextField from "@material-ui/core/TextField";

class SignUpSecondName extends React.Component {
  render() {
    return (
      <TextField
        variant="outlined"
        required
        fullWidth
        id="lastName"
        label="Last Name"
        name="lastName"
      />
    );
  }
}

export default SignUpSecondName;
