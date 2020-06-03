import React from "react";
import { connect } from "react-redux";
import { getRecipesRequest } from "../../store/actions/recipesActions";

class Search extends React.Component {
  state = {
    inputValue: "",
  };

  handleChange = ({ target: { value } }) =>
    this.setState({ inputValue: value });

  handleClick = () => {
    const { inputValue } = this.state;
    const { items: recipes } = this.props.recipes;
    this.props.getRecipesRequest({ inputValue, offset: recipes.length });
    this.setState({ inputValue: "" });
  };

  handleKeyPress = ({ key }) => {
    if (key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div className="Search">
        <h1>search</h1>
        <input
          type="text"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        ></input>
        <button onClick={() => this.handleClick()}>search recipes</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getRecipesRequest })(Search);
