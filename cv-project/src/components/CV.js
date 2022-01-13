import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import GenInfo from "./GenInfo";
import Skills from "./Skills";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

class CV extends Component {
  render() {
    return (
      <Container>
        <Paper elevation={8}>
          <GenInfo />
          <Education />
          <Experience />
          <Skills />
        </Paper>
      </Container>
    );
  }
}

export default CV;
