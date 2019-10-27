import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { fetchData } from './service/fetch';
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
