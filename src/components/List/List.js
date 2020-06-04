import React from "react";
import { FixedSizeList } from "react-window";
import { Link } from "react-router-dom";
import InfiniteLoader from "react-window-infinite-loader";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

class List extends React.Component {
  calcTime = (time) => {
    if (time > 60) {
      const hours = Math.floor(time / 60);
      return hours === 1 ? `${hours} hour ` : `${hours} hours`;
    }

    return time === 1 ? `${time} minute` : `${time} minutes`;
  };

  render() {
    const { items: recipes, hasNextPage, loadNextPage, baseUri } = this.props;

    const itemCount = hasNextPage ? recipes.length + 1 : recipes.length;

    const isItemLoaded = (index) => !hasNextPage || index < recipes.length;

    function ListItemLink(props) {
      return <ListItem button component={Link} {...props} />;
    }

    const Item = ({ index, style }) => {
      let content;

      if (!isItemLoaded(index)) {
        content = (
          <ListItem button>
            <ListItemAvatar>
              <Avatar src="" />
            </ListItemAvatar>
            <ListItemText>Loading</ListItemText>
          </ListItem>
        );
      } else {
        content = (
          <ListItemLink to={`/recipe/${recipes[index].id}`}>
            <ListItemAvatar>
              <Avatar src={baseUri + recipes[index].image}></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={recipes[index].title}
              secondary={this.calcTime(recipes[index].readyInMinutes)}
            ></ListItemText>
          </ListItemLink>
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
          <FixedSizeList
            onItemsRendered={onItemsRendered}
            ref={ref}
            height={400}
            itemCount={itemCount}
            itemSize={50}
            width={700}
          >
            {Item}
          </FixedSizeList>
        )}
      </InfiniteLoader>
    );
  }
}

export default List;
