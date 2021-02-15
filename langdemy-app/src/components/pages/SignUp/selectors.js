// counter.jsxのViewとcalcReducer.jsのModelを繋ぐControllerの役割
import { connect } from "react-redux";
import component from "./index";
import * as Actions from "./actions";
import { bindActionCreators } from "redux";

// propsによってReduxの値を取得できるようにする関数
function mapStateToProps(state) {
  return {
    // rootReducer.jsのexport defaultのオブジェクトがstateになっている。
    ...state,
  };
}

// propsによってReduxの関数を発火できるようにする関数
function mapDispatchToProps(dispatch) {
  // return {
  //   onchangeUserName: () => dispatch(Actions.updateUserName),
  //   onchangeLastName: () => dispatch(Actions.updateLastName),
  //   onchangeemail: () => dispatch(Actions.updateemail),
  //   onchangePassword: () => dispatch(Actions.updatePassword),
  // 使い方
  // Viewのボタンで発火させる変数名: () => dispatch(Reduxの関数を発火させる関数)
  // };
  // 引数が設定できるやり方
  return bindActionCreators(
    {
      ...Actions,
    },
    dispatch
  );
}

// react-redux（reactとreduxをつなげるパッケージ）のconnectの使い方
// 第一引数はredux(Model)側のデータをreact（View）側にpropsで渡す関数名
// 第二引数はredux(Model)側の関数をreact（View）側にpropsで渡す関数名
// connect()(ここに当たる部分はpropsを使えるようにするコンポーネント)
export default connect(mapStateToProps, mapDispatchToProps)(component);
