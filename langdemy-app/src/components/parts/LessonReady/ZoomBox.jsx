import React from "react";
import styles from "./styles.module.css";
import Button from "@material-ui/core/Button";

class ZoomBox extends React.Component {
  render() {
    return (
      <Button
        className={
          this.props.count === 0 ? styles.zoomBox : styles.zoomBoxUnder600
        }
      >
        zoomを開始
        {this.props.lessonReady}
      </Button>
    );
  }
}

export default ZoomBox;
