import React from "react";
import {AppRoute} from "../../store/const";
import {transferRatingToPercent} from "../../utils/utils";
import {offersPropTypes} from "../../custom-prop-types/custom-prop-types";
import {buttonTitle} from "../card/card";
import Button from "../button/button";
import {connect} from "react-redux";
import {toggleFavorites as toggleFavoritesAction} from "../../store/api-actions";
import {getFavoritesOffers} from "../../store/selectors/offers-selectors";


const CardFavorite = (props) => {
  const {offer, toggleFavorites, favorites} = props;
  const {id, previewImage, price, rating, title, type} = offer;
  return (
    <article key={offer.id} className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href={`${AppRoute.OFFER}/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Button
            disabled={false}
            className={`place-card__bookmark-button place-card__bookmark-button--active button`}
            title={buttonTitle}
            type={`button`}
            onClick={() => toggleFavorites(offer, favorites)}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${transferRatingToPercent(rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`${AppRoute.OFFER}/${id}`}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

CardFavorite.propTypes = offersPropTypes;

const mapDispatchToProps = (dispatch) => ({
  toggleFavorites(offer, favoriteOffers) {
    dispatch(toggleFavoritesAction(offer, favoriteOffers));
  }
});

const mapStateToProps = (state) => ({
  favorites: getFavoritesOffers(state),
});

export {CardFavorite};
export default connect(mapStateToProps, mapDispatchToProps)(CardFavorite);

