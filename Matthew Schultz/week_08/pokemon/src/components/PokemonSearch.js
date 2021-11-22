import React, {Component} from 'react';
import axios from 'axios'

import SearchForm from './SearchForm';
import ShowPokemon from './ShowPokemon';

class PokemonSearch extends Component {

  constructor() {
    super();
    this.state = {pokemon: []};
    this.fetchPokemon = this.fetchPokemon.bind(this);
  }

  fetchPokemon(q) {

    const pokemonURL = 'http://pokeapi.co/api/v2/pokemon/' + q;

    this.setState({name: q.charAt(0).toUpperCase() + q.slice(1)});

    axios(pokemonURL).then((result) => {
      this.setState({pokemon: result.data});
    }, () => {
      this.setState({pokemon: null})
    });

  }

  render() {
            // <ShowPokemon pokemon={this.state.pokemon} name={this.state.name}/>
    return (
      <div>
        <SearchForm onSubmit={this.fetchPokemon}/>
      </div>
    )
  }
}

export default PokemonSearch;
