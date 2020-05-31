import React from 'react';
import { connect } from 'react-redux';
import { FixedSizeList as List } from 'react-window';

class RecipeList extends React.Component {
  render() {
    const { items: recipes } = this.props.recipes;
    console.log(recipes);
    const Row = ({ index, style }) => <div style={style}>Row {recipes[index].title}</div>;

    return (
      <div className="RecipeList">
        <List height={150} itemCount={recipes.length} itemSize={35} width={300}>
          {Row}
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps)(RecipeList);
