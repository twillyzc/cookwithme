import React from "react";
import { connect } from "react-redux";
import { getRecipesLoadMoreRequest } from "../../store/actions/recipesActions";
import List from "../List/List";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Loader from "../Loader/Loader";

class Recipes extends React.Component {
  render() {
    const {
      items: recipes,
      totalResults,
      isLoading,
      currentSearch,
      baseUri,
    } = this.props.recipes;

    const loadMoreItems = async () =>
      await this.props.getRecipesLoadMoreRequest({
        value: currentSearch,
        offset: recipes.length,
      });

    const hasMoreItems = totalResults - recipes.length > 0;

    return (
      <>
        {!recipes.length ? (
          !recipes.length && isLoading ? (
            <Loader />
          ) : (
            <SnackbarContent message="Start to search something" />
          )
        ) : (
          <List
            hasNextPage={hasMoreItems}
            isNextPageLoading={isLoading}
            items={recipes}
            loadNextPage={loadMoreItems}
            baseUri={baseUri}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getRecipesLoadMoreRequest })(Recipes);
