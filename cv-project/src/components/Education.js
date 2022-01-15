import React, { useState } from "react";
import uniqid from "uniqid";
import EducationDisplay from "./EducationDisplay";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  hidden: {
    display: "none",
  },
});

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
    <div>
      <Typography variant="h3" gutterBottom>
        Education
      </Typography>
      {displayEducation}
      <form className={hiddenForm} onSubmit={handleSubmit}>
        <div style={{ padding: 5 }}>
          <TextField
            label="School"
            name="school"
            onChange={handleChange}
            value={eduObj.school}
          ></TextField>
        </div>
        <div style={{ padding: 5 }}>
          <TextField
            label="Degree"
            name="degree"
            onChange={handleChange}
            value={eduObj.degree}
          ></TextField>
        </div>
        <div style={{ padding: 5 }}>
          <TextField
            label="Start Date"
            name="from"
            onChange={handleChange}
            value={eduObj.from}
          ></TextField>
        </div>
        <div style={{ padding: 5 }}>
          <TextField
            label="End Date"
            name="to"
            onChange={handleChange}
            value={eduObj.to}
          ></TextField>
        </div>
        <div style={{ padding: 5 }}>
          <TextField
            label="GPA"
            name="gpa"
            onChange={handleChange}
            value={eduObj.gpa}
          ></TextField>
        </div>
        <div style={{ padding: 5 }}>
          <ButtonGroup>
            <Button type="submit" variant="contained">
              Save
            </Button>
            <Button variant="contained" color="secondary" onClick={toggleForm}>
              Close
            </Button>
          </ButtonGroup>
        </div>
      </form>
      <div>
        <Button
          className={hiddenButton}
          variant="contained"
          startIcon={<AddIcon />}
          onClick={toggleForm}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Education;
