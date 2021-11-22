import React, { Component } from 'react';

import axios from 'axios';

class Phone extends Component {

  constructor(props){
    super();
    this.state = {
      query: '',
      phone_name: '',
      image: '',
      }

      this._inputText = this._inputText.bind(this);
      this._submitText = this._submitText.bind(this);
  }


  _inputText(event){
    this.setState({query: event.target.value});
    console.log('Phone name:', event.target.value);
  }

  _submitText(event){
    event.preventDefault();
    let URL = 'https://api-mobilespecs.azharimm.site/v2/latest';
    axios(`https://api-mobilespecs.azharimm.site/v2/latest`).then((result) => {
      console.log(result.data.phones);
      // const results = (result.data.phones).map(URL);
      // console.log('this.data', result.data.phones);
      //   this.setState({phone_name: result.data.phones[0].phone_name, image: result.data.phones[0].image});

    });

  }



  render(){
    return(
      <form>
        <input type="search" onChange={ this._inputText }/>
        <input type="submit" onClick={ this._submitText }/>
        // <p>{ this.state.phone_name }</p>
        // <p>{ this.state.image }</p>
      </form>
    );
  }
}

export default Phone;
