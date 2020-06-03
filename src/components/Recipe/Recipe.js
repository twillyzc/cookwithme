import React from "react";
import { connect } from "react-redux";
import { getRecipeRequest } from "../../store/actions/recipeActions";
import { withRouter } from "react-router-dom";

class Recipe extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getRecipeRequest(id);
  }

  render() {
    const { recipe, isLoading } = this.props;

    return (
      <article className="Recipe">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <div className="recipe__container">
            <h1>{recipe.title}</h1> <p>{recipe.instructions}</p>
          </div>
        )}
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.item,
    isLoading: state.recipe.isLoading,
  };
};

export default connect(mapStateToProps, { getRecipeRequest })(
  withRouter(Recipe)
);
