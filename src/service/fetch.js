const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=25';

function parsePokemon(result) {
  const types = result.types.map(item => item.type.name);

  const abilities = result.abilities.map(item => item.ability.name);

  // aquí queria hacer el otro fetch para meter las evoluciones
  // directamente en el objeto pokemon que paso al state y pasarlo
  // todo por props, accediendo a species.url, pero dice que species
  // no es iterable, al loguear name y url mete una letra por línea
  // (asincronía?)
  // for (const item of result.species.url) {
  //   console.log(item);
  // }

  const pokemon = {
    image: result.sprites.front_default,
    imageBack: result.sprites.back_default,
    name: result.name,
    id: result.id,
    types,
    height: result.height,
    weight: result.weight,
    abilities,
  };
  return pokemon;
}

const findDetailForSinglePokemon = (item, notify) => fetch(item.url)
  .then(response => response.json())
  .then((result) => {
    const pokemon = parsePokemon(result);
    notify(pokemon);
    return pokemon;
  });

const findAllPokemons = notifyLoadedPokemon => fetch(ENDPOINT)
  .then(response => response.json())
  .then(data => Promise.all(data.results.map(
    item => findDetailForSinglePokemon(item, notifyLoadedPokemon),
  )));

export default findAllPokemons;
