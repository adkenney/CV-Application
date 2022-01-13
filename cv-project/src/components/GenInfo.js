import React, { Component } from "react";
import EditableLabel from "./EditableLabel";

class GenInfo extends Component {
  render() {
    return (
      <div>
        <div>
          <EditableLabel value="Full Name" tag="h1" />
          <EditableLabel value="Phone Number" tag="h3" />
          <EditableLabel value="E-mail" tag="h4" />
        </div>
      </div>
    );
  }
}

export default GenInfo;
