import React, { Component } from "react";
import axios from "axios";

import SearchForm from "../search-form/SearchForm";
import Results from "../results/Results";

import "./cat-search.styles.css";

class CatSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      temperament: "",
      description: "",
      image: "",
    };
  }

  fetchCat = (query) => {
    console.log("the form was submitted for: ", query);
    const catAPIURL = "https://api.thecatapi.com/v1/breeds/search";
    const catAPIParams = {
      api_key: "d65f8b9d-d0d6-4202-9324-7931b1c3362f",
      q: query,
      format: "json",
    };

    // Calls API within API - uuuuhh ok
    axios(catAPIURL, { params: catAPIParams }).then((response) => {
      console.log(response);
      const breed_id = response.data[0].id;
      const name = response.data[0].name;
      const temperament = response.data[0].temperament;
      const description = response.data[0].description;

      const generateImageURL = (breed_id) => {
        //api.thecatapi.com/v1/images/search?size=med&breed_id=sibe&api_key=d65f8b9d-d0d6-4202-9324-7931b1c3362f
        const imageSearch = "https://api.thecatapi.com/v1/images/search";
        const imageParams = {
          api_key: "d65f8b9d-d0d6-4202-9324-7931b1c3362f",
          size: "med",
          breed_id: breed_id,
        };

        let imageURL = "";
        // seperate API for image path using breed_id? can't figure out how else.
        axios(imageSearch, { params: imageParams }).then((response) => {
          imageURL = response.data[0].url;
          console.log(imageURL);
          this.setState({ image: imageURL });
        });
      };

      generateImageURL(breed_id);

      this.setState({
        breed: breed_id,
        name: name,
        temperament: temperament,
        description: description,
      });
    });
  };

  render() {
    return (
      <div className="card-list">
        <h1>Search Cat Breeds</h1>
        {/* passing a prop down to child: will be visible in SearchForm props */}
        <SearchForm onSubmit={this.fetchCat} />
        <Results
          name={this.state.name}
          temperament={this.state.temperament}
          description={this.state.description}
          image={this.state.image}
        />
      </div>
    );
  }
}

export default CatSearch;
