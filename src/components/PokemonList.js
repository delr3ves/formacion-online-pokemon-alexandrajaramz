import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = props => {
  const {pokemons} = props;
  return (
    <ul className="main-list">
      {pokemons.map((pokemon, i) => {
        return (
          <PokemonCard key={i}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            id={pokemon.id}
          />
        );
      })}
    </ul>
  );
}

export default PokemonList;