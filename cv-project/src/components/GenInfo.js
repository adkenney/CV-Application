import React from "react";
import EditableLabel from "./EditableLabel";

const GenInfo = () => {
  return (
    <div>
      <div>
        <EditableLabel value="Full Name" />
        <EditableLabel value="Phone Number" />
        <EditableLabel value="E-mail" />
      </div>
    </div>
  );
};

export default GenInfo;
