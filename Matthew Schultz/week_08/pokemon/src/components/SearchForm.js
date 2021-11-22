import React, {Component} from 'react'

class SearchForm extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
      pokemon: []
    }
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  _handleInput(event) {
    this.setState({query: event.target.value})
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input type='search' required placeholder='pikachu' onChange={this._handleInput} />
        <input type='submit' value={'Find Pokemon'} />
      </form>
    );
  }
}

export default SearchForm;
