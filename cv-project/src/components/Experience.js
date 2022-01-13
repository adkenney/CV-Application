import React, { Component } from "react";
import uniqid from "uniqid";
import ExperienceDisplay from "./ExperienceDisplay";
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

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exp: {
        id: uniqid(),
        company: "",
        position: "",
        from: "",
        to: "",
        description: "",
      },
      history: [],
      activeForm: false,
      activeButton: true,
    };
  }

  toggleForm = () => {
    this.setState({
      activeForm: !this.state.activeForm,
      activeButton: !this.state.activeButton,
    });
  };

  clearForm = () => {
    this.setState({
      exp: {
        ...this.state.exp,
        id: uniqid(),
        company: "",
        position: "",
        from: "",
        to: "",
        description: "",
      },
    });
  };
  handleAddBtn = () => {
    this.toggleForm();
  };
  handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({
      exp: { ...this.state.exp, [name]: value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      history: [...this.state.history, this.state.exp],
    });
    this.toggleForm();
    this.clearForm();
  };
  handleDelete = (id) => {
    const filteredArr = this.state.history.filter((item) => {
      return item.id !== id;
    });

    this.setState({
      history: filteredArr,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeForm, activeButton } = this.state;

    const hiddenForm = activeForm
      ? "experience-form"
      : "experience-form hidden";
    const hiddenButton = activeButton ? classes.addItem : classes.hidden;

    const displayExp = this.state.history.map((item) => {
      return (
        <ExperienceDisplay
          key={item.id}
          data={item}
          handleDelete={this.handleDelete}
        />
      );
    });

    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Professional Experience
        </Typography>
        {displayExp}
        <form className={hiddenForm} onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              name="company"
              value={this.state.exp.company}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              value={this.state.exp.position}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="from">From</label>
            <input
              type="text"
              name="from"
              value={this.state.exp.from}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="to">To</label>
            <input
              type="text"
              name="to"
              value={this.state.exp.to}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              value={this.state.exp.description}
              onChange={this.handleChange}
            ></textarea>
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
                onClick={this.toggleForm}
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
    );
  }
}

export default withStyles(useStyles)(Experience);
