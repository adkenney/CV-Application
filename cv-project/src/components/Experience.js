import React, { useState } from "react";
import uniqid from "uniqid";
import ExperienceDisplay from "./ExperienceDisplay";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import useStyles from "../styles/styles";

const Experience = () => {
  const [expObj, setExpObj] = useState({
    id: uniqid(),
    company: "",
    position: "",
    from: "",
    to: "",
    description: "",
  });
  const [expList, setExpList] = useState([]);
  const [activeForm, setActiveForm] = useState(false);
  const [activeButton, setActiveButton] = useState(true);

  const toggleForm = () => {
    setActiveForm(!activeForm);
    setActiveButton(!activeButton);
  };

  const clearForm = () => {
    setExpObj({
      id: uniqid(),
      company: "",
      position: "",
      from: "",
      to: "",
      description: "",
    });
  };

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setExpObj({ ...expObj, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setExpList([...expList, expObj]);
    toggleForm();
    clearForm();
    console.log(expList);
  };

  const handleDelete = (id) => {
    const filteredArr = expList.filter((item) => {
      return item.id !== id;
    });

    setExpList(filteredArr);
  };

  const classes = useStyles();
  const hiddenForm = activeForm ? classes.expForm : classes.hidden;
  const hiddenButton = activeButton ? classes.addItem : classes.hidden;

  const displayExp = expList.map((item) => {
    return (
      <ExperienceDisplay
        key={item.id}
        data={item}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <Container className={classes.sectionContainer}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography className={classes.mainHeader} variant="h4" gutterBottom>
          Work Experience
        </Typography>
        {displayExp}
        <form className={hiddenForm} onSubmit={handleSubmit}>
          <Grid item>
            <TextField
              className={classes.formTextField}
              size="small"
              label="Company"
              name="company"
              value={expObj.company}
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              className={classes.formTextField}
              size="small"
              label="Position"
              name="position"
              value={expObj.position}
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              className={classes.formTextField}
              size="small"
              label="Start Date"
              name="from"
              value={expObj.from}
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              className={classes.formTextField}
              size="small"
              label="End Date"
              name="to"
              value={expObj.to}
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              className={classes.formTextField}
              size="small"
              multiline
              label="Description"
              name="description"
              value={expObj.description}
              onChange={handleChange}
            ></TextField>
          </Grid>
          <Grid container item justifyContent="center">
            <ButtonGroup>
              <Button type="submit" variant="contained">
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={toggleForm}
              >
                Close
              </Button>
            </ButtonGroup>
          </Grid>
        </form>
        <Button
          className={hiddenButton}
          variant="contained"
          startIcon={<AddIcon />}
          onClick={toggleForm}
        >
          Add
        </Button>
      </Grid>
    </Container>
  );
};

export default Experience;
