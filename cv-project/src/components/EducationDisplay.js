import React, { Component } from "react";
import Container from "@mui/material/Container";

class EducationDisplay extends Component {
  render() {
    return (
      <div>
        <Container>
          <div>
            <h5>{this.props.data.school}</h5>
            <p>
              {this.props.data.from} - {this.props.data.to}
            </p>
          </div>
          <div>
            <h5>{this.props.data.degree}</h5>
            <p>{this.props.data.gpa}</p>
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
        </Container>
      </div>
    );
  }
}

export default EducationDisplay;
