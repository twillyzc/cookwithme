import React from "react";
import { FixedSizeList } from "react-window";
import { Link } from "react-router-dom";
import InfiniteLoader from "react-window-infinite-loader";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    const { items: recipes, hasNextPage, loadNextPage, baseUri } = this.props;

    const itemCount = hasNextPage ? recipes.length + 1 : recipes.length;

    const isItemLoaded = (index) => !hasNextPage || index < recipes.length;

    const Item = ({ index, style }) => {
      let content;

      if (!isItemLoaded(index)) {
        content = (
          <ListItem>
            <CircularProgress />
          </ListItem>
        );
        return <div style={style}>{content}</div>;
      }

      content = (
        <ListItem button component={Link} to={`/recipe/${recipes[index].id}`}>
          <ListItemAvatar>
            <Avatar src={`${baseUri + recipes[index].id}-90x90.jpg`} />
          </ListItemAvatar>

          <ListItemText
            primary={recipes[index].title}
            secondary={this.calcTime(recipes[index].readyInMinutes)}
          ></ListItemText>
        </ListItem>
      );
      return <div style={style}>{content}</div>;
    };

    return (
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadNextPage}
      >
        {({ onItemsRendered, ref }) => (
          <FixedSizeList
            onItemsRendered={onItemsRendered}
            ref={ref}
            height={750}
            itemCount={itemCount}
            itemSize={65}
            width={900}
          >
            {Item}
          </FixedSizeList>
        )}
      </InfiniteLoader>
    );
  }
}

export default List;
