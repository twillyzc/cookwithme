import React from "react";
import { connect } from "react-redux";
import { getRecipesLoadMoreRequest } from "../../store/actions/recipesActions";
import ListComponent from "../ListComponent/ListComponent";

class Recipes extends React.Component {
  render() {
    const {
      items: recipes,
      totalResults,
      isLoading,
      currentSearch,
    } = this.props.recipes;

    const loadMoreItems = async () =>
      await this.props.getRecipesLoadMoreRequest({
        value: currentSearch,
        offset: recipes.length,
      });

    const hasMoreItems = totalResults - recipes.length > 0;

    return (
      <div className="Recipes">
        <ListComponent
          hasNextPage={hasMoreItems}
          isNextPageLoading={isLoading}
          items={recipes}
          loadNextPage={loadMoreItems}
        ></ListComponent>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getRecipesLoadMoreRequest })(Recipes);
