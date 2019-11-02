export default class SearchPokemon {
  filterByName(name, pokemons) {
    return pokemons.filter(pokemon =>
      pokemon.name.toUpperCase().includes(name.toUpperCase())
    );
  }
}
