// 会員登録の情報を保持するモデルの宣言
// actionをインポート
import * as Actions from "./actions";
import initialState from "../../../store/initialState";

export const signUpReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_UP:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};