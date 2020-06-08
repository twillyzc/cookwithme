import React from "react";
import { connect } from "react-redux";

import { getRecipesLoadMoreRequest } from "../../store/actions/recipesActions";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Loader from "../Loader/Loader";
import List from "../List/List";

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

    if (!recipes.length && isLoading) {
      return <Loader />;
    }

    if (!recipes.length) {
      return <SnackbarContent message="Start to search something" />;
    }

    return (
      <List
        hasNextPage={hasMoreItems}
        isNextPageLoading={isLoading}
        items={recipes}
        loadNextPage={loadMoreItems}
        baseUri={baseUri}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getRecipesLoadMoreRequest })(Recipes);
