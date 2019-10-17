import React from 'react';
import { fetchData } from './service/fetch';
import PokemonList from './components/PokemonList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: []
    }
  }

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons() {
    fetchData()
    .then(data => {
      for (let item of data.results) {
        fetch(item.url)
          .then(response => response.json())
          .then(result => {
            const types = [];
            for (let item of result.types) {
              types.push(item.type.name);
            }
            const pokemon = {
              image: result.sprites.front_default,
              name: result.name,
              id: result.id,
              types: types
            }
            this.setState({
              pokemons: [...this.state.pokemons, pokemon]
            })
          })
      }
    })
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="header-title">Pokedex</h1>
        </header>
        <main className="app__main">
          <PokemonList
            pokemons = {this.state.pokemons}
          />
        </main>
        <footer className="app__footer">
          <p className="footer-text">Developed by Alexandra Jara &copy; 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
