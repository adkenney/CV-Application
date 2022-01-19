import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import GenInfo from "./GenInfo";
import Skills from "./Skills";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

const CV = () => {
  return (
    <Container>
      <Typography
        sx={{ fontWeight: "bold" }}
        variant="h2"
        align="center"
        gutterBottom
      >
        CV Builder
        <a
          rel="noreferrer"
          href="https://github.com/adkenney/CV-Application"
          target="_blank"
        >
          <GitHubIcon color="secondary" fontSize="large" />
        </a>
      </Typography>

      <Container maxWidth="md">
        <Paper elevation={8} sx={{ padding: 5 }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            maxWidth="md"
          >
            <Grid items>
              <GenInfo />
            </Grid>
            <Grid items>
              <Education />
            </Grid>
            <Grid items>
              <Experience />
            </Grid>
            <Grid items>
              <Skills />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
};
export default CV;
