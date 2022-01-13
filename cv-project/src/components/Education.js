import React, { Component } from "react";
import uniqid from "uniqid";
import EducationDisplay from "./EducationDisplay";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { withStyles } from "@mui/styles";

const useStyles = (theme) => ({
  hidden: {
    display: "none",
  },
});

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edu: {
        id: uniqid(),
        school: "",
        degree: "",
        from: "",
        to: "",
        gpa: "",
      },
      eduList: [],
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

  handleFormToggle = () => {
    this.toggleForm();
  };

  handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({
      edu: { ...this.state.edu, [name]: value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      eduList: [...this.state.eduList, this.state.edu],
    });
    this.toggleForm();
    this.clearForm();
  };

  handleDelete = (id) => {
    const filteredArr = this.state.eduList.filter((item) => {
      return item.id !== id;
    });

    this.setState({
      eduList: filteredArr,
    });
  };

  clearForm = () => {
    this.setState({
      edu: {
        ...this.state.edu,
        id: uniqid(),
        school: "",
        degree: "",
        from: "",
        to: "",
        gpa: "",
      },
    });
  };

  render() {
    const { eduList, activeForm, activeButton } = this.state;
    const { classes } = this.props;
    const hiddenForm = activeForm ? "education-form" : classes.hidden;
    const hiddenButton = activeButton ? classes.addItem : classes.hidden;

    const displayEducation = eduList.map((item) => {
      return (
        <EducationDisplay
          key={item.id}
          data={item}
          handleDelete={this.handleDelete}
        />
      );
    });

    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Education
        </Typography>
        {displayEducation}
        <form className={hiddenForm} onSubmit={this.handleSubmit}>
          <div>
            <TextField
              variant="outlined"
              label="School"
              type="text"
              name="school"
              value={this.state.edu.school}
              onChange={this.handleChange}
            ></TextField>
          </div>
          <div>
            <TextField
              variant="outlined"
              label="Degree"
              type="text"
              name="degree"
              value={this.state.edu.degree}
              onChange={this.handleChange}
            ></TextField>
          </div>
          <div>
            <TextField
              variant="outlined"
              label="Start Date"
              type="text"
              name="from"
              value={this.state.edu.from}
              onChange={this.handleChange}
            ></TextField>
          </div>
          <div>
            <TextField
              variant="outlined"
              label="End Date"
              type="text"
              name="to"
              value={this.state.edu.to}
              onChange={this.handleChange}
            ></TextField>
          </div>
          <div>
            <TextField
              variant="outlined"
              label="GPA"
              type="text"
              name="gpa"
              value={this.state.edu.gpa}
              onChange={this.handleChange}
            ></TextField>
          </div>
          <div>
            <ButtonGroup>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                type="button"
                onClick={this.handleFormToggle}
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
          onClick={this.handleFormToggle}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default withStyles(useStyles)(Education);
