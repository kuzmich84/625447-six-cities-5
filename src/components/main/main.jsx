import React from "react";
import propTypes from "prop-types";
import ListCards from "../listCards/listCards";
import {cityGeoCenter} from "../../mocks/constants";
import {toCapitalize} from "../../utils/utils";
import Map from "../map/map";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import MenuList from "../menuList/menuList";


const Main = (props) => {
  const {offersOfCity, changeCity, city} = props;

  if (!offersOfCity || offersOfCity.length === 0) {
    return null;
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <MenuList changeCity={changeCity} city={city}/>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersOfCity.length} places to stay in {toCapitalize(city)}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"/>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <ListCards offersOfCity={offersOfCity}/>
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              {/*<Map offers={offersOfCity} geoCenterOfCity={cityGeoCenter[toCapitalize(city)]}/>*/}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  offersOfCity: propTypes.array.isRequired,
  changeCity: propTypes.func.isRequired,
  city: propTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  city: state.city,
  offersOfCity: state.offersOfCity
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(toCapitalize(city)));
    dispatch(ActionCreator.getOffers());
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

