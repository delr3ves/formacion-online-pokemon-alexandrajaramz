const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/?limit=25';

export const findAllPokemons = (notifyLoadedPokemon) => {
  return fetch(ENDPOINT)
  .then(response => response.json())
  .then(data => {
    for (let item of data.results) {
      fetch(item.url)
        .then(response => response.json())
        .then(result => {
          const pokemon = parsePokemon(result);
          notifyLoadedPokemon(pokemon);
        })
    }
  })
};

function parsePokemon(result) {
  const types = [];
  for (let item of result.types) {
    types.push(item.type.name);
  }
  const abilities = [];
  for (let item of result.abilities) {
    abilities.push(item.ability.name);
  }

  //aquí queria hacer el otro fetch para meter las evoluciones directamente en el objeto pokemon que paso al state y pasarlo todo por props, accediendo a species.url, pero dice que species no es iterable, al loguear name y url mete una letra por línea (asincronía?)
  for (let item of result.species.url) {
    console.log(item);
  }

  const pokemon = {
    image: result.sprites.front_default,
    imageBack: result.sprites.back_default,
    name: result.name,
    id: result.id,
    types: types,
    height: result.height,
    weight: result.weight,
    abilities: abilities,
  }
  return pokemon;
}
