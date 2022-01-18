import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import useStyles from "../styles/styles";

const EducationDisplay = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container rowSpacing={1} alignItems="center">
        <Grid className={classes.boldHeader} item xs={6}>
          {props.data.from} - {props.data.to}
        </Grid>
        <Grid className={classes.boldHeader} item textAlign="right" xs={6}>
          {props.data.school}
        </Grid>
        <Grid item textAlign="right" xs={12}>
          {props.data.degree}
        </Grid>
        <Grid item textAlign="right" xs={12}>
          GPA: {props.data.gpa}
        </Grid>
        <Grid item textAlign="right" xs={12}>
          {" "}
          <RemoveCircleOutlineIcon
            fontSize="small"
            color="secondary"
            onClick={() => {
              props.handleDelete(props.data.id);
            }}
          ></RemoveCircleOutlineIcon>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EducationDisplay;
