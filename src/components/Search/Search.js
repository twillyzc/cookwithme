import React from "react";
import { connect } from "react-redux";
import { getRecipesRequest } from "../../store/actions/recipesActions";
import { IconSearch, Input, SearchContainer } from "./Search-styles";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
  state = {
    inputValue: "",
  };

  handleChange = ({ target: { value } }) =>
    this.setState({ inputValue: value });

  handleClick = () => {
    const { inputValue } = this.state;
    if (inputValue) {
      this.props.getRecipesRequest(inputValue);
      this.setState({ inputValue: "" });
      this.props.history.push("/");
    }
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.handleClick();
    }
  };

  render() {
    return (
      <SearchContainer>
        <IconSearch onClick={this.handleClick} />
        <Input
          placeholder="Search…"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </SearchContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getRecipesRequest })(
  withRouter(Search)
);
