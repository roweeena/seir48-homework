import React, { Component } from 'react';

import axios from 'axios';


class Weather extends Component {

constructor(){
  super();

  this.state = {
    city: '',
    weatherData: null,
    query: ''
  }

  this.fetchWeather = this.fetchWeather.bind(this);
  this._searchField = this._searchField.bind(this);
  this._submitButton = this._submitButton.bind(this);
}

fetchWeather(city){
  console.log('fetching', city);
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather`;
  const weatherParams = {
    q: city,
    units: `metric`,
    appid: `87f3530b034ce83f07479771285f8bdf`
  }

axios.get(weatherURL, {params: weatherParams}).then((result) => {
  this.setState({weatherData: result.data});
}, () => {
  this.setState({weatherData: null})
});
}

_searchField(event){
  this.setState({query: event.target.query});
  console.log('search', event);
}

_submitButton(event){
  event.preventDefault();
  this.props.onClick( this.state.query );
}


  render(){
    return(
      <form>
      <h1>Enter City</h1>
        <input type="search" requested placeholder="Enter City" onChange={ this._searchField }/>
        <input type="submit" onClick={ this._submitButton }/>
      </form>
    );
  }
}

export default Weather;
