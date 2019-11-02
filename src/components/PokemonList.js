import React from "react";
import PropTypes from "prop-types";
import PokemonCard from "./PokemonCard";
import "../styles/PokemonList.scss";

const PokemonList = props => {
  const { pokemons, searchedName, loading, searchPokemon } = props;
  const filteredPokemons = searchPokemon.filterByName(searchedName, pokemons);

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
          <PokemonCard
            key={i}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            id={pokemon.id}
          />
        );
      })}
    </ul>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array,
  searchedName: PropTypes.string,
  loading: PropTypes.bool,
  searchPokemon: PropTypes.object
};

export default PokemonList;
