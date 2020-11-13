import React from "react";
import {Cities} from "../../mocks/constants";
import propTypes from "prop-types";
import {connect} from "react-redux";
import {getOffers} from "../../store/selectors/offers-selectors";


const MenuList = (props) => {
  const {changeCity, city, offers} = props;

  return (
    <ul className="locations__list tabs__list">
      {Cities.map((cityItem) => {
        return (<li className="locations__item" key={cityItem}>
          <a className={`locations__item-link tabs__item ${city === cityItem ? `tabs__item--active` : ``} `} href={`/city/${cityItem.toLowerCase()}`}
            onClick={(evt) => {
              evt.preventDefault();
              changeCity(cityItem, offers);
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
  city: propTypes.string.isRequired,
  offers: propTypes.array.isRequired
};

const mapStateToProps = (state)=>({
  offers: getOffers(state)
});

export {MenuList};
export default connect(mapStateToProps)(MenuList);
