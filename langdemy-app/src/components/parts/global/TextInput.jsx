import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = (props) => {
  return (
    <TextField
      name={props.name}
      variant="outlined"
      required
      fullWidth
      id={props.id}
      label={props.label}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      autoFocus={props.autoFocus}
    />
  )
}

export default TextInput;
