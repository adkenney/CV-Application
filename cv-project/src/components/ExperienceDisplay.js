import React, { Component } from "react";

class ExperienceDisplay extends Component {
  render() {
    return (
      <div>
        <div>
          <h5>{this.props.data.company}</h5>
          <h6>{this.props.data.position}</h6>
        </div>
        <div>
          <p>
            {this.props.data.from} - {this.props.data.to}
          </p>
        </div>
        <div>
          <p>{this.props.data.description}</p>
        </div>
        <div>
          <i
            onClick={() => {
              this.props.handleDelete(this.props.data.id);
            }}
          >
            Delete
          </i>
        </div>
      </div>
    );
  }
}

export default ExperienceDisplay;
