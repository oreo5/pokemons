import React from 'react';
import './PokemonList.css';

import Pokemon from '../Pokemon/Pokemon';

class PokemonList extends React.Component {
  render() {
    return (
      <div className="PokemonList">
        {
          this.props.pokemons.map(pokemon => {
            return <Pokemon pokemon={pokemon.name} url={pokemon.url}/>
          })
        }
      </div>
    );
  }
}

export default PokemonList;