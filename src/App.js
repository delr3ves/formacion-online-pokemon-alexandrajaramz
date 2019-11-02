import React from 'react';
import {Route, Switch} from 'react-router-dom';
import findAllPokemons from './service/fetch';
//import { fetchSpecie } from './service/fetchSpecie';
import Header from './components/Header';
import Home from './components/Home';
import PokeDetail from './components/PokeDetail';
import Footer from './components/Footer';
import './styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      searchedName: '',
      loading: true,
    }

    this.searchName = this.searchName.bind(this);
    this.notifyPokemonIsLoaded = this.notifyPokemonIsLoaded.bind(this);
  }

  componentDidMount() {
    this.getPokemons();
  }

  notifyPokemonIsLoaded(pokemon) {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon],
      loading: false
    });
  }

  getPokemons() {
    findAllPokemons(this.notifyPokemonIsLoaded);
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
        <Header />
        <Switch>
          <Route exact path="/" render={() =>
            <Home
              searchName={this.searchName}
              pokemons={this.state.pokemons}
              searchedName={this.state.searchedName}
              loading={this.state.loading}
            />
          } />
          <Route path="/pokemon/:name" render={(routerProps) =>
            <PokeDetail
              routerProps={routerProps}
              pokemons={this.state.pokemons}
            />
          } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
