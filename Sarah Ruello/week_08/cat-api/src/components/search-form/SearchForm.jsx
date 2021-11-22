import React, { Component } from "react";
import "./search-form.styles.css";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      //   query: "",
      //   images: [],
    };

    // this._handleInput = this._handleInput.bind(this);
    // this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput = (e) => {
    // console.log(e.target.value); // log as user types.
    this.setState({ query: e.target.value });
  };

  _handleSubmit = (e) => {
    // only need to bind when you're used this. keyword.
    e.preventDefault(); // don't submit form please
    console.log("we are inside of <SearchForm/>");
    this.props.onSubmit(this.state.query); // passed onSubmit() down from parent, can be called here
  };

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input
            type="search"
            className="search"
            required
            placeholder="e.g. Bengal"
            onChange={this._handleInput}
          />
          <input type="submit" className="btn" value={`Search for ${this.state.query}`} />
        </form>
      </div>
    );
  }
}

export default SearchForm;
