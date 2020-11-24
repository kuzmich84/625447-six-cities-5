import React from "react";
import propTypes from "prop-types";
import ListCards from "../list-cards/list-cards";
import {cityGeoCenter} from "../../mocks/constants";
import {getOffersUtils, toCapitalize} from "../../utils/utils";
import Map from "../map/map";
import {changeCity, loadOffersOfCity} from "../../store/action";
import {connect} from "react-redux";
import MenuList from "../menu-list/menu-list";
import Filter from "../filter/filter";
import {getOffersOfCity} from "../../store/selectors/offers-selectors";
import MainEmpty from "../main-empty/main-empty";


const Main = (props) => {


  const {offersOfCity, changeCityAction, city} = props;

  const renderMain = () => {
    if (offersOfCity.length === 0) {
      return <MainEmpty cityName={city}/>;
    } else {
      return (<div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersOfCity.length} places to stay in {toCapitalize(city)}</b>
          <Filter/>
          <div className="cities__places-list places__list tabs__content">
            <ListCards/>
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map offers={offersOfCity} geoCenterOfCity={cityGeoCenter[toCapitalize(city)]}/>
          </section>
        </div>
      </div>);
    }
  };


  return (
    <main className={`page__main page__main--index ${!offersOfCity.length ? `page__main--index-empty` : ``}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <MenuList changeCity={changeCityAction} city={city}/>
        </section>
      </div>
      <div className="cities">
        {renderMain()}
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
  offersOfCity: getOffersOfCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCityAction(city, offers) {
    dispatch(changeCity(toCapitalize(city)));
    dispatch(loadOffersOfCity(getOffersUtils(offers, city)));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

