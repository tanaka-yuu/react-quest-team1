import React from "react";
import styles from "./styles.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ZoomBox from "../../parts/LessonReady/ZoomBox";
import ScheduleBox from "../../parts/LessonReady/ScheduleBox";
import ZoomTestBox from "../../parts/LessonReady/ZoomTestBox";
import SignInBox from "../../parts/LessonReady/SignInBox";
import SignUpBox from "../../parts/LessonReady/SignUpBox";

class LessonReady extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: null,
      count: 0, //countはLessonReadyの画面の管理をする値です。countは画面のサイズが６００px以下で1、６００px以上で0になるように設定しています。
      user: true, //userのlogin状態を管理をする値です。管理方法は91行目と115行目のstyleをuserJudgeBoxInとuserJudgeBoxOutに動的に変更する事で管理しています。
    }; //trueでuserがいる状態、falseでuserがいない状態です。
  }

  componentDidMount() {
    const windowheight = window.innerHeight;
    const windowwidth = window.innerWidth;
    if (windowwidth <= 600) {
      this.setState({
        count: 1,
      });
    }
    // 基本的にはサイトを開いたデバイスの画面の縦のサイズをLessonReadyのheightに設定しています。もし、LessonReadyのheihgtがサイトを開いたデバイスの
    // 画面の縦のサイズを超える場合は、超えた値を取得し、LessonReadyのheightに設定を変えています。
    setTimeout(() => {
      const element = this.wrapperBox;
      if (windowheight <= element.clientHeight) {
        this.setState({
          windowHeight: element.clientHeight,
        });
      } else {
        this.setState({
          windowHeight: windowheight,
        });
      }
    }, 0);
  }

  componentWillMount() {
    this.props.get();
  }

  render() {
    const css = {
      width: "100%",
      height: this.state.windowHeight,
      backgroundColor: "#EEEEEE",
      position: "absolute",
      top: "0",
      left: "0",
    };

    const Justify1Over600 = "flex-end";
    const Justify1Under600 = "center";

    const Justify2Over600 = "flex-start";
    const Justify2Under600 = "center";

    const justify1 =
      this.state.count === 0 ? Justify1Over600 : Justify1Under600;

    const justify2 =
      this.state.count === 0 ? Justify2Over600 : Justify2Under600;

    console.log(this.props);
    console.log(this.state.count);

    return (
      <div
        className={styles.wrapperBox}
        id="wrapperBox"
        ref={(x) => {
          this.wrapperBox = x;
        }}
      >
        <div style={css}></div>
        <Container
          component="main"
          maxWidth="lg"
          className={
            this.state.count === 0 ? styles.mainBox : styles.mainBoxUnder600
          }
        >
          
          <div
            className={
              this.state.user === true
                ? styles.userJudgeBoxIn
                : styles.userJudgeBoxOut
            }
          >
            <Grid container spacing={0}>
              <Grid item xs={12} container justify="center">
                <Grid item container justify={justify1} xs={12} sm={6}>
                  <ZoomBox count={this.state.count} />
                </Grid>
                <Grid item container justify={justify2} xs={12} sm={6}>
                  <ScheduleBox count={this.state.count} />
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item container justify="center">
                <ZoomTestBox count={this.state.count} />
              </Grid>
            </Grid>
          </div>
          <div
            className={
              this.state.user === false
                ? styles.userJudgeBoxIn
                : styles.userJudgeBoxOut
            }
          >
            <Grid container spacing={0}>
              <Grid item xs={12} container justify="center">
                <Grid item container justify={justify1} xs={12} sm={6}>
                  <SignInBox count={this.state.count} />
                </Grid>
                <Grid item container justify={justify2} xs={12} sm={6}>
                  <SignUpBox count={this.state.count} />
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

export default LessonReady;
