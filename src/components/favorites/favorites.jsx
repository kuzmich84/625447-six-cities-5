import React from 'react';
import {offersPropTypes} from "../../custom-prop-types/custom-prop-types";
import {toCapitalize, transferRatingToPercent} from "../../utils/utils";
import {connect} from "react-redux";
import Header from "../header/header";
import {AppRoute} from "../../store/const";
import {Link} from "react-router-dom";
import {changeCity as changeCityAction} from "../../store/action";


const Favorites = (props) => {
  const {favorites, changeCity} = props;
  const uniqueCities = [...new Set(favorites.filter((offer) => offer.isFavorite).map((offer) => offer.city.name))];

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
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
                    {favorites.filter((offer) => offer.city.name === city && offer.isFavorite).map((offer) => {
                      return (<article key={offer.id} className="favorites__card place-card">
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <a href={`${AppRoute.OFFER}/${offer.id}`}>
                            <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image"/>
                          </a>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">&euro;{offer.price}</b>
                              <span className="place-card__price-text">&#47;&nbsp;night</span>
                            </div>
                            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                              <svg className="place-card__bookmark-icon" width="18" height="19">
                                <use xlinkHref="#icon-bookmark"/>
                              </svg>
                              <span className="visually-hidden">In bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{width: `${transferRatingToPercent(offer.rating)}%`}}/>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <a href={`${AppRoute.OFFER}/${offer.id}`}>{offer.title}</a>
                          </h2>
                          <p className="place-card__type">{offer.type}</p>
                        </div>
                      </article>);
                    }
                    )}
                  </div>
                </li>);
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = offersPropTypes;

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
