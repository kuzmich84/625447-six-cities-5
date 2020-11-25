import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../store/const";
import propTypes from "prop-types";
import CardFavorite from "../card-favorite/card-favorite";

const ListFavorites = (props) => {
  const {uniqueCities, changeCity, favorites} = props;
  return (
    <ul className="favorites__list">
      {uniqueCities.map((city) => {
        return (<li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={`${AppRoute.CITY}/${city.toLowerCase()}`} onClick={() => {
                changeCity(city);
              }}>
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {favorites.filter((offer) => offer.city.name === city && offer.isFavorite).map((offer) => <CardFavorite offer={offer} key={offer.id}/>)}
          </div>
        </li>);
      })}
    </ul>
  );
};

ListFavorites.propTypes = {
  uniqueCities: propTypes.array.isRequired,
  changeCity: propTypes.func.isRequired,
  favorites: propTypes.array,
};

export default ListFavorites;
