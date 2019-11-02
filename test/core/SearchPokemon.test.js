import SearchPokemon from "../../src/core/SearchPokemon";

const searchPokemon = new SearchPokemon();
const pokemonDataset = [
  {
    name: "Bulbasaur",
    id: 1
  },
  {
    name: "Ivisaur",
    id: 2
  },
  {
    name: "Venusaur",
    id: 3
  },
  {
    name: "Charmeleon",
    id: 4
  }
];

const allSaurs = [
  {
    name: "Bulbasaur",
    id: 1
  },
  {
    name: "Ivisaur",
    id: 2
  },
  {
    name: "Venusaur",
    id: 3
  }
];

test("Search pokemons with and empty list should return the empty list", () => {
  expect(searchPokemon.filterByName("any name", [])).toEqual([]);
});

test("Search pokemons with and empty query should return the full list", () => {
  expect(searchPokemon.filterByName("", pokemonDataset)).toEqual(
    pokemonDataset
  );
});

test("Search pokemons with a matching case criteria should filter pokemons containing name", () => {
  const expected = allSaurs;
  expect(searchPokemon.filterByName("saur", pokemonDataset)).toEqual(expected);
});

test("Search pokemons with a non-matching case criteria should filter pokemons containing name ignoring case", () => {
  const expected = allSaurs;
  expect(searchPokemon.filterByName("SaUr", pokemonDataset)).toEqual(expected);
});

test("Search pokemons with a non-matching criteria should filter all pokemons returning an empty list", () => {
  expect(
    searchPokemon.filterByName("not found pokemon", pokemonDataset)
  ).toEqual([]);
});
