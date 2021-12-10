import axios from "axios";

import React, { Component } from "react";

export default class BookSearch extends Component {
  constructor() {
    super();
    this.state = { query: "" };
    this.state = { image: "" };
    this.state = { api: "book" };
    this.state = { joke: "" };
    this.state = { description: "" };
    this._clickHandler = this._clickHandler.bind(this);
    this._searchInput = this._searchInput.bind(this);
    this._dropDownHandler = this._dropDownHandler.bind(this);
  }
  _searchInput(event) {
    // console.log(event);
    this.setState({ query: event.target.value });
  }
  _dropDownHandler(event) {
    this.setState({ joke: "" });
    this.setState({ image: "" });
    this.setState({ description: "" });
    this.setState({ api: event.target.value });
  }
  _clickHandler() {
    // console.log(this.state);
    switch (this.state.api) {
      case "book":
        axios(
          `https://www.googleapis.com/books/v1/volumes?q=title:${this.state.query}`
        ).then((result) => {
          const cover = result.data.items[0].volumeInfo.imageLinks.thumbnail;
          //   console.log(cover);
          this.setState({ image: cover });
        });
        break;
      case "crypto":
        axios(
          `https://api.coingecko.com/api/v3/coins/${this.state.query}`
        ).then((result) => {
          const coinImage = result.data.image.thumb;
          const description = result.data.description.en;
          //   console.log(cover);
          this.setState({ image: coinImage });
          this.setState({ description: description });
        });
        break;
      case "joke":
        const fullName = this.state.query.split(" ");
        axios(
          `https://api.icndb.com/jokes/random?firstName=${fullName[0]}&lastName=${fullName[1]}`
        ).then((result) => {
          const joke = result.data.value.joke;
          this.setState({ joke: joke });
        });
        break;
      default:
        return;
    }
  }
  render() {
    return (
      <div>
        <h2 style={{ textTransform: "uppercase" }}>
          Go for {this.state.api || "Book"}
        </h2>
        <input
          type="search"
          onChange={this._searchInput}
          required
          placeholder="Jaws"
        />
        <button onClick={this._clickHandler}>Run</button>
        <select
          name=""
          id=""
          value={this.state.api}
          onChange={this._dropDownHandler}
        >
          <option value="book">Google Book</option>
          <option value="crypto">Crypto Data</option>
          <option value="joke">Joke</option>
        </select>
        <div className="image">
          <img src={this.state.image} alt="" />
          <p>{this.state.joke}</p>
          <div
            dangerouslySetInnerHTML={{ __html: this.state.description }}
          ></div>
        </div>
      </div>
    );
  }
}
