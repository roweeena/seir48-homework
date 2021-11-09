import React, { Component } from "react";

class SearchForm extends Component {
  constructor(){
    super();
    this.state = {
      request: ""
    };

    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event){
    this.setState({ request: event.target.value });
  }

  _handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.request);
    this.setState({request: ""});
  }

  render(){
    return (
      <form onSubmit={ this._handleSubmit}>
        <input type="search" value={ this.state.request } onChange={ this._handleInput } required placeholder="type in city name here"/>
        <input type="submit" value={`Search Weather for ${ this.state.request}`}/>
      </form>
    );
  }
}

export default SearchForm;
