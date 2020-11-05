import React from "react";
import {Cities} from "../../mocks/constants";
import propTypes from "prop-types";

const MenuList = (props) => {
  const {changeCity, city} = props;

  return (
    <ul className="locations__list tabs__list">
      {Cities.map((cityItem) => {
        return (<li className="locations__item" key={cityItem}>
          <a className={`locations__item-link tabs__item ${city === cityItem ? `tabs__item--active` : ``} `} href={`/city/${cityItem.toLowerCase()}`}
            onClick={(evt) => {
              evt.preventDefault();
              changeCity(cityItem);
            }}
          >
            <span>{cityItem}</span>
          </a>
        </li>);
      })}
    </ul>

  );
};

MenuList.propTypes = {
  changeCity: propTypes.func.isRequired,
  city: propTypes.string.isRequired
};

export default MenuList;
