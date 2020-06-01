import React from 'react';
import { connect } from 'react-redux';
import { getRecipesRequest } from '../../store/actions/repicesActions';

class Search extends React.Component {
  state = {
    inputValue: '',
  };

  handleChange = ({ target: { value } }) => this.setState({ inputValue: value });

  handleClick = () => {
    const { inputValue } = this.state;
    this.props.getRecipesRequest(inputValue);
    this.setState({ inputValue: '' });
  };

  handleKeyPress = ({ key }) => {
    if (key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div className="Search">
        <h1>search</h1>
        <input type="text" onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
        <button onClick={() => this.handleClick()}>search recipes</button>
      </div>
    );
  }
}

export default connect(null, { getRecipesRequest })(Search);
