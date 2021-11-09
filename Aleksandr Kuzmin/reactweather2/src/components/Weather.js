import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {
  constructor(props) {
    super();
    this.state = {
      city: "",
      weatherData: null,
    };
    this.fetchWeather = this.fetchWeather.bind(this);
  }
  fetchWeather(city) {
    console.log("Fetching", city);
    const weatherURL = "http://api.openweathermap.org/data/2.5/weather";
    const weatherParams = {
      q: city,
      units: "metric",
      appid: "87f3530b034ce83f07479771285f8bdf",
    };

    axios.get(weatherURL, { params: weatherParams }).then(
      (result) => {
        this.setState({ weatherData: result.data });
      },
      () => {
        this.setState({ weatherData: null });
      }
    );
  }

  render() {
    return (
      <diiv>
        <h1>Whether the Weather</h1>
        <SearchForm onSubmit={this.fetchWeather} />
        <WeatherInfo data={this.state.weatherData} />
      </diiv>
    );
  }
}

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { query: "" };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({ query: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input
          type="search"
          onInput={this._handleInput}
          required
          placeholder="Glasgow"
        />
        <input type="submit" value="Get weather" />
      </form>
    );
  }
}

const WeatherInfo = (props) => {
  if (props && props.data === null) {
    return "";
  } else {
    return (
      <div>
        <h2>Weather for {props.data.name}</h2>
        <h3>Currently {Math.round(props.data.main.temp)}&deg;C</h3>
        <ing
          src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`}
          alt={props.data.weather[0].description}
        />
        <h4>
          {props.data.weather[0].main}: {props.data.weather[0].description}
        </h4>
      </div>
    );
  }
};

export default Weather;
