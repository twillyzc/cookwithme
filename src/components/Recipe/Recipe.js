import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getRecipeRequest } from "../../store/actions/recipeActions";
import Loader from "../Loader/Loader";

import { Paragraph, Image, Heading, Title } from "./Recipe-styles";

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
      <article>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Image src={this.props.recipe.image}>
              <Title>{recipe.title}</Title>
            </Image>
            <Heading>About</Heading>
            <Paragraph>{this.removeTags(recipe.summary)}</Paragraph>
            <Heading>How to cook</Heading>
            <Paragraph>{this.removeTags(recipe.instructions)}</Paragraph>
          </>
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
