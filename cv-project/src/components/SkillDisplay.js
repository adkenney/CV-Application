import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import useStyles from "../styles/styles";

const SkillDisplay = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Button
        variant="contained"
        endIcon={
          <RemoveCircleOutlineIcon
            fontSize="small"
            color="secondary"
            onClick={() => {
              props.handleDelete(props.data.id);
            }}
          />
        }
      >
        {props.data.skillText}
      </Button>
    </Container>
  );
};

export default SkillDisplay;
