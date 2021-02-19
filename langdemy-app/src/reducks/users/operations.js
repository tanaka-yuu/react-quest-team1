import { auth, db, FirebaseTimestamp } from "../../firebase/index";
import { signInAction, signOutAction, signUpAction } from "./actions";
import { push } from "connected-react-router";

export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid: ", uid);

        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();

            console.log("data: ", data);

            dispatch(
              signInAction({
                isSignedIn: true,
                role: data.role,
                uid: uid,
                userName: data.userName,
              })
            );

            dispatch(push("/"));
          });
      } else {
        dispatch(push("/signin"));
      }
    });
  };
};

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
          .then((snapshot) => {
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

export const signUpFunc = (userName, email, password) => {
  return async (dispatch) => {
    // Validation
    if (userName === "") {
      alert("ユーザーネームを入力してください。");
      return false;
    }

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

    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;

        if (user) {
          const uid = user.uid;
          const timestamp = FirebaseTimestamp.now();

          const userInitialData = {
            created_at: timestamp,
            email: email,
            role: "customer",
            uid: uid,
            updated_at: timestamp,
            userName: userName,
          };

          db.collection("users")
            .doc(uid)
            .set(userInitialData)
            .then(() => {
              dispatch(
                signUpAction({
                  userName: userName,
                  email: email,
                  password: password,
                  uid: uid,
                  role: "customer",
                  isSignedIn: true,
                })
              );
              dispatch(push("/"));
            });
        }
      });
  };
};


export const signOut = () => {
  return async (dispatch) => {
    auth.signOut()
        .then(() => {
          dispatch(signOutAction());
          dispatch(push("/signin"));
        })
  }
}
