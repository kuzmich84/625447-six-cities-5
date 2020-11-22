import React from "react";
import {transferRatingToPercent} from "../../utils/utils";
import {AppRoute} from "../../store/const";
import {offerPropTypes} from "../../custom-prop-types/custom-prop-types";


const NearbyCard = (props) => {
  const {offer} = props;
  const {previewImage, price, isFavorite, rating, title, type, id} = offer;
  const link = `${AppRoute.OFFER}/${id}`;
  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href={link}>
          <img className="place-card__image" src={previewImage} width="260" height="200"
            alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``}  button`}
            type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${transferRatingToPercent(rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={link}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );

};

NearbyCard.propTypes = offerPropTypes;
export default NearbyCard;
