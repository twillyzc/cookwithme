import React from 'react';
import { connect } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import { Link } from 'react-router-dom';

class Recipes extends React.Component {
  render() {
    const { items: recipes } = this.props.recipes;
    const Row = ({ index, style }) => (
      <div style={style}>
        {' '}
        <Link to={`/recipe/${recipes[index].id}`}>{recipes[index].title}</Link>
      </div>
    );

    return (
      <div className="Recipes">
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

export default connect(mapStateToProps)(Recipes);
