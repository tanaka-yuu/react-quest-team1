import React from "react";
import Calender from "../../parts/schedule/calender";

class Schedule extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <Calender />
      </div>
    );
  }
}

export default Schedule;
