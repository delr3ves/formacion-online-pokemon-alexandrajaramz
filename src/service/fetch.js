const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?limit=25";

function parsePokemon(result) {
  const types = result.types.map(item => item.type.name);
  const abilities = result.abilities.map(item => item.ability.name);
  const sprites = result.sprites || {};
  const pokemon = {
    image: sprites.front_default,
    imageBack: sprites.back_default,
    name: result.name,
    id: result.id,
    types,
    height: result.height,
    weight: result.weight,
    abilities
  };
  return pokemon;
}

const findDetailForSinglePokemon = (item, notify = () => {}) => {
  return fetch(item.url)
    .then(response => response.json())
    .then(result => {
      const pokemon = parsePokemon(result);
      notify(pokemon);
      return pokemon;
    });
};

const findAllPokemons = notifyLoadedPokemon =>
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data =>
      Promise.all(
        data.results.map(item =>
          findDetailForSinglePokemon(item, notifyLoadedPokemon)
        )
      )
    );

export default findAllPokemons;
