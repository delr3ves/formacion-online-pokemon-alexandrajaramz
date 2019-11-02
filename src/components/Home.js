import React from 'react';
import Filters from './Filters';
import PokemonList from './PokemonList';
import SearchPokemon from '../core/SearchPokemon';

const Home = (props) => {
  const {
    searchName,
    pokemons,
    searchedName,
    loading
  } = props;

  return (
    <main className="app__main">
      <Filters searchName={searchName}/>
      <PokemonList
        pokemons={pokemons}
        searchedName={searchedName}
        loading={loading}
        searchPokemon={new SearchPokemon()}
      />
    </main>
  );  
}

export default Home;