import React from 'react';
import '../styles/PokemonCard.scss';

const PokemonCard = props => {
  const {name, image, types, id} = props;
  return (
    <li className="list-element">
      <div className="card__wrapper">
        <div className="card__img-wrapper">
          <img src={image} alt={`Imagen de ${name}`} className="card__img"/>
        </div>
        <div className="card__info-wrapper">
          <h2 className="info__name">{name}</h2>
          <p className="info__ID">{`ID / ${id}`}</p>
          <ul className="info__types">
            {types.map((type, index) => {
              return (
                <li key={index} className="types-element">
                  {type}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default PokemonCard;