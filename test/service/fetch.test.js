import findAllPokemons from "../../src/service/fetch";
import FakeServer from "../utils/FakeServer";
import PokemonApiResponseMother from "./PokemonApiResponseMother";

const server = new FakeServer();
const pokemonMother = new PokemonApiResponseMother();

const pokemonDataset = [
  {
    name: "Bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1"
  },
  {
    name: "Ivisaur",
    url: "https://pokeapi.co/api/v2/pokemon/2"
  },
  {
    name: "Venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3"
  },
  {
    name: "Charmeleon",
    url: "https://pokeapi.co/api/v2/pokemon/4"
  }
];

beforeEach(() => {
  server.reset();
  server.start();
});

afterEach(() => {
  server.stop();
});

test("Test find all pokemons should return the list of detailed pokemons", done => {
  server.expect("https://pokeapi.co/api/v2/pokemon/?limit=25", {
    results: pokemonDataset
  });
  pokemonDataset.forEach(pokemon => {
    server.expect(pokemon.url, pokemonMother.sample(pokemon.name));
  });
  findAllPokemons().then(result => {
    expect(result).toEqual([
      {
        abilities: ["chlorophyll"],
        height: 7,
        id: 1,
        name: "Bulbasaur",
        types: ["poison"],
        weight: 69
      },
      {
        abilities: ["chlorophyll"],
        height: 7,
        id: 1,
        name: "Ivisaur",
        types: ["poison"],
        weight: 69
      },
      {
        abilities: ["chlorophyll"],
        height: 7,
        id: 1,
        name: "Venusaur",
        types: ["poison"],
        weight: 69
      },
      {
        abilities: ["chlorophyll"],
        height: 7,
        id: 1,
        name: "Charmeleon",
        types: ["poison"],
        weight: 69
      }
    ]);
    done();
  });
});

test("Test find all pokemons should fail when some pokemons are not found", done => {
  server.expect("https://pokeapi.co/api/v2/pokemon/?limit=25", {
    results: pokemonDataset
  });
  server.expect(
    "https://pokeapi.co/api/v2/pokemon/1",
    pokemonMother.sample("Bulbasour")
  );

  findAllPokemons().catch(() => {
    done();
  });
});
