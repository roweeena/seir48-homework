import React, { Component } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";
import Result from "./Result";

class WeatherSearch extends Component {
  constructor(){
    super();
    this.state = {
      city: "",
      description: "",
      lowestTemp: "",
      highestTemp: "",
      humidity: ""
    };

    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather(input){
    axios(`http://api.openweathermap.org/data/2.5/forecast?q=${ input }&units=metric&appid=c7a1e27e540b032aa648b4915be385aa`).then((response) => {
      console.log(response);
      const city = "Weather in " + response.data.city.name + ":";
      const description = "Today's weather: " + response.data.list[0].weather[0].description;
      const lowestTemp = "Lowest Temperature: " + response.data.list[0].main.temp_min + "°C";
      const highestTemp = "Highest Temperature: " + response.data.list[0].main.temp_max + "°C";
      const humidity = "Humidity: " + response.data.list[0].main.humidity + "%";

      this.setState({city: city});
      this.setState({description: description});
      this.setState({lowestTemp: lowestTemp});
      this.setState({highestTemp: highestTemp});
      this.setState({humidity: humidity});
    });
  }

  render(){
    return (
      <div>
        <h1>Weather Forecast</h1>
        <SearchForm onSubmit={ this.fetchWeather }/>
        <Result city={ this.state.city } description={ this.state.description } lowestTemp={ this.state.lowestTemp} highestTemp={ this.state.highestTemp} humidity={ this.state.humidity}/>
      </div>
    );
  }
}

export default WeatherSearch;
