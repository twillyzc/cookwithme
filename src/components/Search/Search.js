import React from "react";
import { connect } from "react-redux";
import { getRecipesRequest } from "../../store/actions/recipesActions";
import { Container, Input, Icon } from "./Search-styles";
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
      <Container>
        <Icon onClick={this.handleClick} />
        <Input
          placeholder="Search…"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </Container>
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
