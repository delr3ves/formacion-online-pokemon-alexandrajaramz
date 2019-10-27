import React from 'react';
import {Link} from 'react-router-dom';
import { fetchSpecie } from '../service/fetchSpecie';
import '../styles/PokeDetail.scss';

const PokeDetail = (props) => {
  const {
    routerProps,
    pokemons
  } = props;

  //guardamos el identificador de la ruta de las routerProps
  const clickedName = routerProps.match.params.name;
  //filtramos el array con todos los pokemon por nombre para que coincida con el de la ruta
  const clickedPokemon = pokemons.filter(item => {return(item.name === clickedName)});
  console.log('pokemon click', clickedPokemon[0].name);
  //guardamos la id del pokemon clickado para usarla en la petición de evoluciones
  const ID = clickedPokemon[0].id;
  console.log(ID);
  //terminamos el fetch e intentamos guardar el dato que existe dentro del then en el array
  let evolvesFrom = []
  fetchSpecie(ID)
  .then(species => {
    evolvesFrom.push(species.evolves_from_species.name);
    console.log('dentro', evolvesFrom);
  })
  console.log('fuera', evolvesFrom);

  if (clickedPokemon[0]){
    return (
        <section className="detail__section">       
          <Link className="detail__back" to="/">&lt; Volver</Link>
          <div className="detail__wrapper-content">    
            <h2 className="detail__name">{clickedPokemon[0].name}</h2>
            <div className="detail__img-wrapper">
              <img className="detail__img" src={clickedPokemon[0].image} alt={`Imagen frontal de ${clickedPokemon[0].name}`}/>
              <img className="detail__img" src={clickedPokemon[0].imageBack} alt={`Imagen trasera de ${clickedPokemon[0].name}`}/>
            </div>
            <div className="detail__info">
              <h3>Profile</h3>
              <p className="detail__info-status info-p">{`Height: ${clickedPokemon[0].height}`}</p>
              <p className="detail__info-species info-p">{`Weight: ${clickedPokemon[0].weight}`}</p>
{/*               <p>{`Evolution of ${evolvesFrom.name}`}</p> */}
              <div>
                <h4>Abilities:</h4>
                <ul className="info__types">
                  {clickedPokemon[0].abilities.map((ability, index) => {
                    return (
                      <li key={index}>
                        {ability}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
    )
  } else {
    return(   
      <main className="app__main">
        <p className="detail__back-error">No encontramos ese pokemon...</p>
        <Link className="detail__back" to="/">&lt; Volver</Link>
      </main>
    )
  }
}

export default PokeDetail;