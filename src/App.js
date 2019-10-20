import React from 'react';
import { fetchData } from './service/fetch';
import Filters from './components/Filters';
import PokemonList from './components/PokemonList';
import './styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      searchedName: '',
      loading: true
    }

    this.searchName = this.searchName.bind(this);
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
              pokemons: [...this.state.pokemons, pokemon],
              loading: false
            })
          })
      }
    })
  }

  searchName(event) {
    const inputName = event.currentTarget.value;
    this.setState({
      searchedName: inputName
    })
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="header-title">Pokedex</h1>
          <Filters searchName={this.searchName}/>
        </header>
        <main className="app__main">
          <PokemonList
            pokemons={this.state.pokemons}
            searchedName={this.state.searchedName}
            loading={this.state.loading}
          />
        </main>
        <footer className="app__footer">
          <p className="footer-text">Developed by <a className="footer-github" href="https://github.com/alexandrajaramz" target="_blank" rel="noopener noreferrer">Alexandra Jara</a> &copy; 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
