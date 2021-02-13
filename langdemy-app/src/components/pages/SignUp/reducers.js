// 会員登録の情報を保持するモデルの宣言
// actionをインポート
import * as Actions from "./actions";

// stateの初期値を設定
const initialState = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Actions.ONCHANGE_FIRSTNAME:
    case Actions.ONCHANGE_LASTNAME:
    case Actions.ONCHANGE_EMAIL_ADDRESS:
    case Actions.ONCHANGE_PASSWORD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
