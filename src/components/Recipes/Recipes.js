import React from "react";
import { connect } from "react-redux";
import { getRecipesLoadMoreRequest } from "../../store/actions/recipesActions";
import List from "../List/List";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1200px;
`;

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
      <Container>
        <List
          hasNextPage={hasMoreItems}
          isNextPageLoading={isLoading}
          items={recipes}
          loadNextPage={loadMoreItems}
          baseUri={baseUri}
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

export default connect(mapStateToProps, { getRecipesLoadMoreRequest })(Recipes);
