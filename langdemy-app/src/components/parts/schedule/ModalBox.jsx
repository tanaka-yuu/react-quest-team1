import React from "react";
import Modal from "@material-ui/core/Modal";
import Body from "./Body";

class ModalBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      isOpen: false,
    });
  }

  componentDidUpdate() {
    console.log("child.props", this.props.isOpen);
    console.log("this.state.isOpen", this.state.isOpen);
  }

  render() {
    return (
      <Modal
        open={this.state.isOpen}
        onClose={this.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Body />
      </Modal>
    );
  }
}

export default ModalBox;
