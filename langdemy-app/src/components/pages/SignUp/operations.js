import { auth, db, FirebaseTimestamp } from "../../../firebase/index";
import { push } from "connected-react-router";

export const signUpFunc = (firstName, lastName, emailAddress, password) => {
  return async (dispatch) => {
    // Validation
    if (firstName === "") {
      alert("First Nameを入力してください。");
      return false;
    }

    if (lastName === "") {
      alert("Last Nameを入力してください。");
      return false;
    }

    if (emailAddress === "") {
      alert("メールアドレスを入力してください。");
      return false;
    }

    if (password === "") {
      alert("パスワードを入力してください。");
      return false;
    }

    if (password.length < 8) {
      alert("パスワードは8字以上で入力してください。");
      return false;
    }

    return auth
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        const user = result.user;

        if (user) {
          const userID = user.userID;
          const timestamp = FirebaseTimestamp.now();

          const userInitialData = {
            created_at: timestamp,
            email: emailAddress,
            role: "customer",
            userID: userID,
            updated_at: timestamp,
            userName: firstName + lastName
          }

          db.collection("users").doc(userID).set(userInitialData)
          .then(() => {
            dispatch(push("/"))
          })
        }
      });
  };
};
