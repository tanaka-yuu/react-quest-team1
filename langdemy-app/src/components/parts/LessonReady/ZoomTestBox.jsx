import React from "react";
import styles from "./styles.module.css";
import Button from "@material-ui/core/Button";

class ZoomTestBox extends React.Component {
  render() {
    return (
      <Button
        className={
          this.props.count === 0
            ? styles.zoomTestBox
            : styles.zoomTestBoxUnder600
        }
      >
        Zoomを確認
      </Button>
    );
  }
}

export default ZoomTestBox;
