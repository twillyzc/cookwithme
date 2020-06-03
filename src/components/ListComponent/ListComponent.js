import React from "react";
import { connect } from "react-redux";
import { FixedSizeList as List } from "react-window";
import { Link } from "react-router-dom";
import InfiniteLoader from "react-window-infinite-loader";

class ListComponent extends React.Component {
  render() {
    const { items: recipes, hasNextPage, loadNextPage } = this.props;

    const itemCount = hasNextPage ? recipes.length + 1 : recipes.length;

    const isItemLoaded = (index) => !hasNextPage || index < recipes.length;

    const Item = ({ index, style }) => {
      let content;

      if (!isItemLoaded(index)) {
        content = "Loading...";
      } else {
        content = (
          <Link to={`/recipe/${recipes[index].id}`}>
            {recipes[index].title}
          </Link>
        );
      }
      return <div style={style}>{content}</div>;
    };

    return (
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadNextPage}
      >
        {({ onItemsRendered, ref }) => (
          <List
            onItemsRendered={onItemsRendered}
            ref={ref}
            height={150}
            itemCount={itemCount}
            itemSize={35}
            width={300}
          >
            {Item}
          </List>
        )}
      </InfiniteLoader>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps)(ListComponent);
