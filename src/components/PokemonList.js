import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = props => {
  const {pokemons, searchedName, loading} = props;

  const filteredPokemons = pokemons.filter(item => item.name.toUpperCase().includes(searchedName.toUpperCase()));
  
  if (loading) {
    return (
      <p>Loading Pokémons...</p>
    );
  } 

  if (!filteredPokemons.length) {
    return (
      <p>No results.</p>
    );
  } 
  
  return (
    <ul className="main-list">
      {filteredPokemons.map((pokemon, i) => {
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