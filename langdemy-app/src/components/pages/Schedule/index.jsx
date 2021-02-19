import React from "react";
import Calender1 from "../../parts/schedule/Calender1";

class Schedule extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <Calender1 />
      </div>
    );
  }
}

export default Schedule;
