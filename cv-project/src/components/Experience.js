import React, { useState } from "react";
import uniqid from "uniqid";
import ExperienceDisplay from "./ExperienceDisplay";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  hidden: {
    display: "none",
  },
});

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
    <div>
      <Typography variant="h3" gutterBottom>
        Professional Experience
      </Typography>
      {displayExp}
      <form className={hiddenForm} onSubmit={handleSubmit}>
        <div style={{ padding: 5 }}>
          <TextField
            label="Company"
            name="company"
            value={expObj.company}
            onChange={handleChange}
          ></TextField>
        </div>
        <div style={{ padding: 5 }}>
          <TextField
            label="Position"
            name="position"
            value={expObj.position}
            onChange={handleChange}
          ></TextField>
        </div>
        <div style={{ padding: 5 }}>
          <TextField
            label="Start Date"
            name="to"
            value={expObj.to}
            onChange={handleChange}
          ></TextField>
        </div>
        <div style={{ padding: 5 }}>
          <TextField
            label="End Date"
            name="from"
            value={expObj.from}
            onChange={handleChange}
          ></TextField>
        </div>
        <div style={{ padding: 5 }}>
          <TextField
            multiline
            label="Description"
            name="description"
            value={expObj.description}
            onChange={handleChange}
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
      <Button
        className={hiddenButton}
        variant="contained"
        startIcon={<AddIcon />}
        onClick={toggleForm}
      >
        Add
      </Button>
    </div>
  );
};

export default Experience;
