import React from "react";
import { Link } from "react-router-dom";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Loader from "../Loader/Loader";

import { Container } from "./List-styles";

class List extends React.Component {
  calcTime = (time) => {
    if (time > 60) {
      const minutes = time % 60;
      const hours = (time - minutes) / 60;

      return `${hours} hour(s) ${minutes} minute(s)`;
    }
    return `${time} minute(s)`;
  };

  render() {
    const {
      items: recipes,
      hasNextPage,
      loadNextPage,
      baseUri,
      isNextPageLoading,
    } = this.props;

    const itemCount = hasNextPage ? recipes.length + 1 : recipes.length;

    const isItemLoaded = (index) => !hasNextPage || index < recipes.length;

    const Item = ({ index, style }) => {
      if (!isItemLoaded(index)) {
        return (
          <div style={style}>
            <Loader />
          </div>
        );
      }

      return (
        <div style={style}>
          <ListItem button component={Link} to={`/recipe/${recipes[index].id}`}>
            <ListItemAvatar>
              <Avatar src={`${baseUri + recipes[index].id}-90x90.jpg`} />
            </ListItemAvatar>

            <ListItemText
              primary={recipes[index].title}
              secondary={this.calcTime(recipes[index].readyInMinutes)}
            ></ListItemText>
          </ListItem>
        </div>
      );
    };

    if (!recipes.length && isNextPageLoading) {
      return <Container>{<Loader />}</Container>;
    }

    return (
      <Container>
        <AutoSizer>
          {({ height, width }) => (
            <InfiniteLoader
              isItemLoaded={isItemLoaded}
              itemCount={itemCount}
              loadMoreItems={loadNextPage}
            >
              {({ onItemsRendered, ref }) => (
                <FixedSizeList
                  onItemsRendered={onItemsRendered}
                  ref={ref}
                  height={height}
                  itemCount={itemCount}
                  itemSize={65}
                  width={width}
                >
                  {Item}
                </FixedSizeList>
              )}
            </InfiniteLoader>
          )}
        </AutoSizer>
      </Container>
    );
  }
}

export default List;
