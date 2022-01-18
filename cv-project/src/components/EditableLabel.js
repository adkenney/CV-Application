import React, { useState } from "react";
import InputBase from "@mui/material/InputBase";

const EditableLabel = (props) => {
  const [text, setText] = useState(props.value);
  const [defaultText] = useState(props.value);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setText(text);
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const save = () => {
    setText(text);
    setIsEditing(false);

    if (text === "") {
      setText(defaultText);
    }
  };

  const handleBlur = () => {
    save();
  };

  const handleEnterKey = (event) => {
    if (event.keyCode === 13) {
      save();
    }
  };
  return isEditing ? (
    <InputBase
      sx={{ textAlign: "center" }}
      size="small"
      variant="standard"
      type="text"
      value={text}
      autoFocus={true}
      onKeyDown={handleEnterKey}
      onBlur={handleBlur}
      onChange={handleChange}
    ></InputBase>
  ) : (
    <p style={{ margin: 0 }} onClick={handleClick}>
      {text}
    </p>
  );
};

export default EditableLabel;
