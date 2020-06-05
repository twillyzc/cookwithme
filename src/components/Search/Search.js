import React from "react";
import { connect } from "react-redux";
import { getRecipesRequest } from "../../store/actions/recipesActions";
import { IconSearch, Input, SearchContainer } from "./Search-styles";
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
      <SearchContainer>
        <IconSearch />
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

export default connect(mapStateToProps, { getRecipesRequest })(Search);
