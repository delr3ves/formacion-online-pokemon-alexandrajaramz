import React from 'react';
import PokemonCard from './PokemonCard';
import '../styles/PokemonList.scss';

const PokemonList = props => {
  const {pokemons, searchedName, loading} = props;
  const filteredPokemons = pokemons
  .filter(item => item.name.toUpperCase().includes(searchedName.toUpperCase()))
  .sort((a, b) => parseFloat(a.id) - parseFloat(b.id));;
  
  if (loading) {
    return (
      <div className="main-loading">
        <p>Loading Pokémons...</p>
      </div>
    );
  } 

  if (!filteredPokemons.length) {
    return (
      <div className="main-nores">
        <p>No results.</p>
      </div>
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