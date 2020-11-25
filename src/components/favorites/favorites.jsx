import React from 'react';
import {toCapitalize} from "../../utils/utils";
import {connect} from "react-redux";
import Header from "../header/header";
import {changeCity as changeCityAction} from "../../store/action";
import ListFavorites from "../list-favorites/list-favorites";
import propTypes from "prop-types";
import Footer from "../footer/footer";
import FavoritesEmpty from "../favorites-empty/favorites-empty";


const Favorites = (props) => {
  const {favorites, changeCity} = props;
  const uniqueCities = [...new Set(favorites.filter((offer) => offer.isFavorite).map((offer) => offer.city.name))];

  const renderFavorite = () => {
    if (favorites.length === 0) {
      return <FavoritesEmpty/>;
    } else {
      return (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ListFavorites changeCity={changeCity} uniqueCities={uniqueCities} favorites={favorites}/>
            </section>
          </div>
        </main>
      );
    }
  };

  return (
    <div className="page">
      <Header/>
      {renderFavorite()}
      <Footer/>
    </div>
  );
};

Favorites.propTypes = {
  favorites: propTypes.array.isRequired,
  changeCity: propTypes.func.isRequired,
};

const mapStateToProps = ({OFFER}) => ({
  favorites: OFFER.favorites
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(changeCityAction(toCapitalize(city)));
  }
});


export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
