import React, { Component } from "react";

class SkillDisplay extends Component {
  render() {
    return (
      <div>
        <h5>
          {this.props.data.skillText}
          <button
            onClick={() => {
              this.props.handleDelete(this.props.data.id);
            }}
          >
            x
          </button>
        </h5>
      </div>
    );
  }
}

export default SkillDisplay;
