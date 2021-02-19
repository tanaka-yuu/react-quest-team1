import React from "react";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../reducks/users/operations";
import { getIsSignedIn, getUserName } from "../../../reducks/users/selectors";

const SignOutButton = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);
  const userName = getUserName(selector);

  if (!isSignedIn) {
    return <></>;
  } else {
    return (
      <div>
        <div style={{ flexDirection: "row" }}>
          <p>{userName}さん</p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(signOut())}
          >
            SIGN OUT
          </Button>
        </div>
      </div>
    );
  }
};

export default SignOutButton;
