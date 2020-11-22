import React from 'react';
import {offersPropTypes} from "../../custom-prop-types/custom-prop-types";
import {transferRatingToPercent} from "../../utils/utils";
import {connect} from "react-redux";
import Header from "../header/header";


const Favorites = (props) => {
  const {offers} = props;

  const uniqueCities = [...new Set(offers.filter((offer) => offer.isFavorite).map((offer) => offer.city.name))];

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
                      <a className="locations__item-link" href={`/city/${city.toLowerCase()}`}>
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offers.filter((offer) => offer.city.name === city && offer.isFavorite).map((offer) => {
                      return (<article key={offer.id} className="favorites__card place-card">
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <a href={`/offer/${offer.id}`}>
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
                            <a href={`/offer/${offer.id}`}>{offer.title}</a>
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

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers
});


export {Favorites};
export default connect(mapStateToProps)(Favorites);
