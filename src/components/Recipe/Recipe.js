import React from 'react';
import { connect } from 'react-redux';
import { getRecipeRequest } from '../../store/actions/recipeActions';
import { withRouter } from 'react-router-dom';
class Recipe extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getRecipeRequest(id);
  }

  render() {
    const { recipe } = this.props;
    const { id } = this.props.match.params;
    return (
      <div className="Recipe">
        <h1>{recipe.title}</h1>
        <p>{recipe.instructions}</p>
        <button onClick={() => this.props.getRecipeRequest(id)}>Recipe info</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe.item,
  };
};

export default connect(mapStateToProps, { getRecipeRequest })(withRouter(Recipe));
