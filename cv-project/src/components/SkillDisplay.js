import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const SkillDisplay = (props) => {
  return (
    <div>
      <div>
        {props.data.skillText}
        <RemoveCircleOutlineIcon
          fontSize="small"
          color="secondary"
          onClick={() => {
            props.handleDelete(props.data.id);
          }}
        />
      </div>
    </div>
  );
};

export default SkillDisplay;
