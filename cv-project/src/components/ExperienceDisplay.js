import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import useStyles from "../styles/styles";

const ExperienceDisplay = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container rowSpacing={1} alignItems="center">
        <Grid className={classes.boldHeader} item xs={6}>
          {props.data.from} - {props.data.to}
        </Grid>
        <Grid className={classes.boldHeader} item textAlign="right" xs={6}>
          {props.data.company}
        </Grid>
        <Grid item textAlign="right" xs={12}>
          {props.data.position}
        </Grid>

        <Grid item textAlign="right" xs={12}>
          {props.data.description}
        </Grid>
      </Grid>
      <Grid item textAlign="right" sx={{ paddingTop: 1 }} xs={12}>
        <RemoveCircleOutlineIcon
          fontSize="small"
          color="secondary"
          onClick={() => {
            props.handleDelete(props.data.id);
          }}
        ></RemoveCircleOutlineIcon>
      </Grid>
    </Container>
  );
};

export default ExperienceDisplay;
