import React from 'react'

const ShowPokemon = (props) => {
  return(
    <div>
        <h2>{props.name}</h2>
        <img src={props.pokemon.sprites.front_default} alt={props.name} />
        <p>Dex Number: {props.pokemon.id}</p>
    </div>
  )
}

export default ShowPokemon;
