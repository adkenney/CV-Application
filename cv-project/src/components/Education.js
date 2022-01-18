import React, { useState } from "react";
import uniqid from "uniqid";
import EducationDisplay from "./EducationDisplay";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useStyles from "../styles/styles";

const Education = () => {
  const [eduObj, setEduObj] = useState({
    id: uniqid(),
    school: "",
    degree: "",
    from: "",
    to: "",
    gpa: "",
  });
  const [eduList, setEduList] = useState([]);
  const [activeForm, setActiveForm] = useState(false);
  const [activeButton, setActiveButton] = useState(true);

  const toggleForm = () => {
    setActiveForm(!activeForm);
    setActiveButton(!activeButton);
  };

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setEduObj({ ...eduObj, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEduList([...eduList, eduObj]);
    clearForm();
    toggleForm();
  };

  const handleDelete = (id) => {
    const filteredArr = eduList.filter((item) => {
      return item.id !== id;
    });

    setEduList(filteredArr);
  };

  const clearForm = () => {
    setEduObj({
      id: uniqid(),
      school: "",
      degree: "",
      from: "",
      to: "",
      gpa: "",
    });
  };
  // styling for MUI components
  const classes = useStyles();
  // Form and button toggle
  const hiddenForm = activeForm ? classes.eduForm : classes.hidden;
  const hiddenButton = activeButton ? classes.addItem : classes.hidden;
  // display user inputs after submission
  const displayEducation = eduList.map((item) => {
    return (
      <EducationDisplay key={item.id} data={item} handleDelete={handleDelete} />
    );
  });

  return (
    <Container className={classes.sectionContainer}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="sm"
        spacing={0}
      >
        <Typography variant="h4" className={classes.mainHeader} gutterBottom>
          Education
        </Typography>
        {displayEducation}
        <form className={hiddenForm} onSubmit={handleSubmit}>
          <Grid item>
            <TextField
              className={classes.formTextField}
              size="small"
              label="School"
              name="school"
              onChange={handleChange}
              value={eduObj.school}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              className={classes.formTextField}
              size="small"
              label="Degree"
              name="degree"
              onChange={handleChange}
              value={eduObj.degree}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              className={classes.formTextField}
              size="small"
              label="Start Date"
              name="from"
              onChange={handleChange}
              value={eduObj.from}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              className={classes.formTextField}
              size="small"
              label="End Date"
              name="to"
              onChange={handleChange}
              value={eduObj.to}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              className={classes.formTextField}
              size="small"
              label="GPA"
              name="gpa"
              onChange={handleChange}
              value={eduObj.gpa}
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

export default Education;
