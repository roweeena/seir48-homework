import React, { Component } from 'react';

import axios from 'axios';

class SearchForm extends Component {

  constructor(props){
    super();
    this.state = {
      query: '',
      data: []
    }

      this._clickButton = this._clickButton.bind(this);

  }


  _clickButton(event){
    event.preventDefault();
    axios('http://numbersapi.com/random/trivia').then((result) => {
    console.log(result);
    this.setState({data: result.data});
  });

    console.log('you clicked the button');
  }

  render(){
    return(
      <form>
        <input type="submit" onClick = { this._clickButton }/>
        <p>{ this.state.data }</p>
      </form>
    );
  }
}

export default SearchForm;
