import React from "react";
import {Cities} from "../../mocks/constants";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {getCity, getOffers} from "../../store/selectors/offers-selectors";
import {AppRoute} from "../../store/const";
import {Link} from "react-router-dom";


const MenuList = (props) => {
  const {changeCity, city, offers} = props;
  return (
    <ul className="locations__list tabs__list">
      {Cities.map((cityItem) => {
        return (<li className="locations__item" key={cityItem}>
          <Link className={`locations__item-link tabs__item ${city === cityItem ? `tabs__item--active` : ``} `}
            to={`${AppRoute.CITY}/${cityItem.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              changeCity(cityItem, offers);
            }}
          >
            <span>{cityItem}</span>
          </Link>
        </li>);
      })}
    </ul>

  );
};

MenuList.propTypes = {
  changeCity: propTypes.func.isRequired,
  city: propTypes.string.isRequired,
  offers: propTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  city: getCity(state),
});

export {MenuList};
export default connect(mapStateToProps)(MenuList);
