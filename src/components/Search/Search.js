import React from "react";
import { connect } from "react-redux";
import { getRecipesRequest } from "../../store/actions/recipesActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Search extends React.Component {
  state = {
    inputValue: "",
  };

  handleChange = ({ target: { value } }) =>
    this.setState({ inputValue: value });

  handleClick = () => {
    const { inputValue } = this.state;
    this.props.getRecipesRequest(inputValue);
    this.setState({ inputValue: "" });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.handleClick();
    }
  };

  render() {
    return (
      <form>
        <TextField
          label="Search"
          type="text"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          variant="filled"
        ></TextField>
        <Button variant="contained" onClick={() => this.handleClick()}>
          search recipes
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getRecipesRequest })(Search);
