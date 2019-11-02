import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/PokemonCard.scss";

const PokemonCard = props => {
  const { name, image, types, id } = props;
  return (
    <li className="list-element">
      <Link to={`/pokemon/${name}`} className="list__link">
        <div className="card__wrapper">
          <div className="card__img-wrapper">
            <img src={image} alt={`Imagen de ${name}`} className="card__img" />
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
      </Link>
    </li>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  types: PropTypes.array,
  id: PropTypes.number
};

export default PokemonCard;
