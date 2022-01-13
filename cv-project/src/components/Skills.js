import React, { Component } from "react";
import uniqid from "uniqid";
import SkillDisplay from "./SkillDisplay";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { withStyles } from "@mui/styles";

const useStyles = (theme) => ({
  hidden: {
    display: "none",
  },
});

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: {
        id: uniqid(),
        skillText: "",
      },
      skillList: [],
      activeForm: false,
      activeButton: true,
    };
  }
  toggleForm() {
    this.setState({
      activeForm: !this.state.activeForm,
      activeButton: !this.state.activeButton,
    });
  }

  handleAddBtn = () => {
    this.toggleForm();
  };

  handleCloseBtn = () => {
    this.toggleForm();
  };

  handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({
      skill: { ...this.state.skill, [name]: value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      skillList: [...this.state.skillList, this.state.skill],
    });
    this.toggleForm();
    this.clearForm();
  };

  handleDelete = (id) => {
    const filteredArr = this.state.skillList.filter((item) => {
      return item.id !== id;
    });

    this.setState({
      skillList: filteredArr,
    });
  };

  clearForm = () => {
    this.setState({
      skill: {
        ...this.state.skill,
        id: uniqid(),
        skillText: "",
      },
    });
  };

  render() {
    const { classes } = this.props;
    const { skillList, activeForm, activeButton } = this.state;

    const hiddenForm = activeForm ? "skill-form" : "skill-form hidden";
    const hiddenButton = activeButton ? classes.addItem : classes.hidden;

    const displaySkill = skillList.map((item) => {
      return (
        <SkillDisplay
          key={item.id}
          data={item}
          handleDelete={this.handleDelete}
        />
      );
    });

    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        {displaySkill}
        <div>
          <form className={hiddenForm}>
            <input
              type="text"
              name="skillText"
              value={this.state.skill.skillText}
              onChange={this.handleChange}
            ></input>
            <div>
              <ButtonGroup>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Add Skill
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  type="button"
                  onClick={this.handleCloseBtn}
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
            onClick={this.handleAddBtn}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Skills);
