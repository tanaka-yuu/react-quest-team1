import React from "react";

class LessonReady extends React.Component {

  componentWillMount() {
    this.props.get();
}

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>LessonReady</h1>
        {this.props.html}
      </div>
    );
  }
}

export default LessonReady;
