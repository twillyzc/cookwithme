import React from "react";
import { connect } from "react-redux";
import { getRecipeRequest } from "../../store/actions/recipeActions";
import { withRouter } from "react-router-dom";
import { Paragraph, Image } from "./Recipe-styles";
import CircularProgress from "@material-ui/core/CircularProgress";

class Recipe extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getRecipeRequest(id);
  }

  removeTags = (text) => {
    if (text) {
      return text.replace(/<.*?>/g, "");
    }
  };

  render() {
    const { recipe, isLoading } = this.props;

    return (
      <article className="Recipe">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <div>
            <h1>{recipe.title}</h1>
            <Image>
              <img
                src={this.props.recipe.image}
                alt={this.props.recipe.title}
              />
            </Image>
            <Paragraph>{this.removeTags(recipe.instructions)}</Paragraph>
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
