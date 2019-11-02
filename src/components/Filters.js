import React from "react";
import PropTypes from "prop-types";
import "../styles/Filters.scss";

const Filters = props => {
  const { searchName } = props;
  return (
    <form className="header__form">
      <label htmlFor="form-name">
        <input
          type="text"
          name="form-name"
          className="form-name__input"
          placeholder="Find a Pokémon..."
          onChange={searchName}
        />
      </label>
    </form>
  );
};

Filters.propTypes = {
  searchName: PropTypes.func
};

export default Filters;
