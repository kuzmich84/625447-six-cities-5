import React from "react";
import propTypes from "prop-types";
import ListCards from "../listCards/listCards";
import {cityGeoCenter} from "../../mocks/constants";
import {toCapitalize} from "../../utils/utils";
import Map from "../map/map";
import {getOffers, changeCity} from "../../store/action";
import {connect} from "react-redux";
import MenuList from "../menuList/menuList";
import Filter from "../filter/filter";
import {getCity, getOffersOfCity} from "../../selectors/offers-selectors";


const Main = (props) => {


  const {offersOfCity, changeCityAction, city} = props;

  if (!offersOfCity || offersOfCity.length === 0) {
    return null;
  }


  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <MenuList changeCity={changeCityAction} city={city}/>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersOfCity.length} places to stay in {toCapitalize(city)}</b>
            <Filter/>
            <div className="cities__places-list places__list tabs__content">
              <ListCards />
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map offers={offersOfCity} geoCenterOfCity={cityGeoCenter[toCapitalize(city)]}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  offersOfCity: propTypes.array.isRequired,
  changeCityAction: propTypes.func.isRequired,
  city: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offersOfCity: getOffersOfCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCityAction(city) {
    dispatch(changeCity(toCapitalize(city)));
    dispatch(getOffers());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

