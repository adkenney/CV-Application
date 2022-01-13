import React, { Component } from "react";
import InputBase from "@mui/material/InputBase";

class EditableLabel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.value,
      tag: props.tag,
      default: props.value,
      isEditing: false,
    };
  }

  handleClick = () => {
    this.setState({
      text: this.state.text,
      isEditing: true,
    });
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleBlur = () => {
    this.save();
  };

  enterKeyPress = (event) => {
    if (event.keyCode === 13) {
      this.save();
    }
  };

  save = () => {
    this.setState({
      text: this.state.text,
      isEditing: false,
    });

    if (this.state.text === "") {
      this.setState({
        text: this.state.default,
      });
    }
  };

  render() {
    return this.state.isEditing ? (
      <InputBase
        variant="standard"
        type="text"
        value={this.state.text}
        autoFocus={true}
        onKeyDown={this.enterKeyPress}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
      ></InputBase>
    ) : (
      <this.state.tag onClick={this.handleClick}>
        {this.state.text}
      </this.state.tag>
    );
  }
}

export default EditableLabel;
