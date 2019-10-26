const ENDPOINT  = 'https://pokeapi.co/api/v2/pokemon-species/';

const fetchSpecie = (pokemonId) => fetch(ENDPOINT+pokemonId).then(response => response.json());

export { fetchSpecie }