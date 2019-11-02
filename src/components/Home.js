import React from 'react';
import Filters from './Filters';
import PokemonList from './PokemonList';

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
      />
    </main>
  );  
}

export default Home;