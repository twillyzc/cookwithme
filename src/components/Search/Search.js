import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import debounce from "lodash.debounce";

import { getRecipesRequest } from "../../store/actions/recipesActions";
import { Container, Input, Icon } from "./Search-styles";

class Search extends React.Component {
  state = {
    inputValue: "",
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
    this.debounceClick();
  };

  handleClick = () => {
    const { inputValue } = this.state;
    if (inputValue) {
      this.props.getRecipesRequest(inputValue);
      this.setState({ inputValue: "" });
      this.props.history.push("/");
    }
  };

  debounceClick = debounce(this.handleClick, 350);

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
        <Input placeholder="Search…" onChange={this.handleChange} />
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
