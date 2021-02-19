import React from "react";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../reducks/users/operations";
import { getIsSignedIn } from "../../../reducks/users/selectors";

const SignOutButton = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

  if (!isSignedIn) {
    return <></>;
  } else {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(signOut())}
      >
        SIGN OUT
      </Button>
    );
  }
};

export default SignOutButton;
