import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import Results from './Results';

class WeatherSearch extends Component {
  constructor() {
    super();
    this.state = { 
      location: '',
      temperature: 0,
      feelsLike: 0,
      description: '',
      icon: '',
      wind: 0
     };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

    fetchWeather = (city) => {
    console.log(city);
    const weatherURL = `http://api.weatherapi.com/v1/current.json?key=674dc1c564884c5b8b950818210811&q=${city}&aqi=no`;

    axios(weatherURL).then((response) => {
      this.setState({location: response.data.location.name})
      this.setState({temperature: response.data.current.temp_c})
      this.setState({feelsLike: response.data.current.feelslike_c})
      this.setState({description: response.data.current.condition.text})
      this.setState({icon: response.data.current.condition.icon})
      this.setState({wind: response.data.current.wind_kph})
    })

  }

  render() {
    return (
      <div>
        <h1>Weather search</h1>
        <SearchForm onSubmit={ this.fetchWeather } />
        <Results location={this.state.location} temp={this.state.temperature} feelsLike={this.state.feelsLike} description={this.state.description} icon={this.state.icon} wind={this.state.wind}/>
      </div>
    );
  }
}

export default WeatherSearch;