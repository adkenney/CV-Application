import React, { useState } from "react";
import uniqid from "uniqid";
import SkillDisplay from "./SkillDisplay";
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

const Skills = () => {
  const [skillObj, setSkillObj] = useState({ id: uniqid, skillText: "" });
  const [skillList, setSkillList] = useState([]);
  const [activeForm, setActiveForm] = useState(false);
  const [activeButton, setActiveButton] = useState(true);

  const toggleForm = () => {
    setActiveForm(!activeForm);
    setActiveButton(!activeButton);
  };

  const clearForm = () => {
    setSkillObj({ id: uniqid, skillText: "" });
  };

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setSkillObj({ ...skillObj, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSkillList([...skillList, skillObj]);
    clearForm();
    toggleForm();
  };

  const handleDelete = (id) => {
    const filteredArr = skillList.filter((item) => {
      return item.id !== id;
    });

    setSkillList(filteredArr);
  };
  const classes = useStyles();
  const hiddenForm = activeForm ? classes.skillItem : classes.hidden;
  const hiddenButton = activeButton ? classes.addItem : classes.hidden;

  const displaySkill = skillList.map((item) => {
    return (
      <SkillDisplay key={item.id} data={item} handleDelete={handleDelete} />
    );
  });

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      {displaySkill}
      <div>
        <form className={hiddenForm} onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="skillText"
            value={skillObj.skillText}
            onChange={handleChange}
          ></TextField>
          <div>
            <ButtonGroup>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                startIcon={<AddIcon />}
              >
                Add Skill
              </Button>
              <Button
                variant="contained"
                color="secondary"
                type="button"
                onClick={toggleForm}
              >
                Close
              </Button>
            </ButtonGroup>
          </div>
        </form>
        <Button
          variant="contained"
          color="primary"
          className={hiddenButton}
          onClick={toggleForm}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Skills;
