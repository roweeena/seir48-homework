import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      city: ''
    };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({city: event.target.value})
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.city)
  }
 
  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input type="search" required placeholder="Boston" onChange={this._handleInput} />
        <input type="submit" value={`Find weather for ${this.state.city}`} />
      </form>
    );
  }
}

export default SearchForm;