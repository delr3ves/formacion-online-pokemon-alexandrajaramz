import React from "react";
import PropTypes from "prop-types";
import Filters from "./Filters";
import PokemonList from "./PokemonList";
import SearchPokemon from "../core/SearchPokemon";

const Home = props => {
  const { searchName, pokemons, searchedName, loading } = props;

  return (
    <main className="app__main">
      <Filters searchName={searchName} />
      <PokemonList
        pokemons={pokemons}
        searchedName={searchedName}
        loading={loading}
        searchPokemon={new SearchPokemon()}
      />
    </main>
  );
};

Home.propTypes = {
  searchName: PropTypes.func,
  pokemons: PropTypes.array,
  searchedName: PropTypes.string,
  loading: PropTypes.bool
};
export default Home;
