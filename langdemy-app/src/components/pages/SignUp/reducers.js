// 会員登録の情報を保持するモデルの宣言
// actionをインポート
import * as Actions from "./actions";
import initialState from "../../../store/initialState";

export const signUpReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.ONCHANGE_FIRSTNAME:
    case Actions.ONCHANGE_LASTNAME:
    case Actions.ONCHANGE_EMAIL_ADDRESS:
    case Actions.ONCHANGE_PASSWORD:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.SIGN_UP:
      return {
        ...action.payload,
      }
    default:
      return state;
  }
}
