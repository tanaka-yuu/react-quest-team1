import React from "react";
import styles from "./styles.module.css";
import Button from "@material-ui/core/Button";

class ZoomBox extends React.Component {
  render() {
    return (
      <Button
        href = {this.props.joinUrl}
        className={
          this.props.count === 0 ? styles.zoomBox : styles.zoomBoxUnder600
        } 
      >
        zoomを開始
      </Button>
    );
  }
}

export default ZoomBox;
