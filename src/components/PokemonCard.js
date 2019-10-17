import React from 'react';

const PokemonCard = props => {
  const {name, image, types, id} = props;
  return (
    <li>
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      <p>{id}</p>
      <ul>
        {types.map((type, index) => {
          return (
            <li key={index}>
              {type}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default PokemonCard;