import { auth, db } from "../../../firebase/index";
import { signInAction } from "./actions";
import { push } from "connected-react-router";

export const signInFunc = (email, password) => {
  return async (dispatch) => {
    // Validation
    if (email === "") {
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

    auth.signInWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;

      if (user) {
        const uid = user.uid;
        console.log("uid: ", uid);

        db.collection("users")
          .doc(uid)
          .get()
          .then(snapshot => {
            const data = snapshot.data();

            console.log("data: ", data);

            dispatch(
              signInAction({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                userName: data.userName,
                email: email,
                password: password,
              })
            );

            dispatch(push("/"));
          });
      }
    });
  };
};
