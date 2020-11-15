import React from "react";
import {offerPropTypes} from "../../custom-prop-types/custom-prop-types";
import {transferRatingToPercent} from "../../utils/utils";
import {Link} from "react-router-dom";
import {AppRoute} from "../../store/const";
import {connect} from "react-redux";
import {fetchOffer} from "../../store/api-actions";

const Card = (props) => {
  const {offer, handleHoverCard, loadOfferAction} = props;
  const {title, images, price, type, isPremium, isFavorite, rating} = offer;
  const link = `${AppRoute.OFFER}/${offer.id}`;

  return (<article className="cities__place-card place-card" onMouseOver={() => handleHoverCard(offer, offer.id)}>
    {isPremium
      ? (<div className="place-card__mark">
        <span>Premium</span>
      </div>)
      : ``}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={link}>
        <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image"/>
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button place-card__bookmark-button button`}
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
        <Link to={link} onClick={() => loadOfferAction(offer.id)}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>);

};

Card.propTypes = offerPropTypes;


const mapDispatchToProps = (dispatch) => ({
  loadOfferAction(offerId) {
    dispatch(fetchOffer(offerId));
  },
});

export {Card};
export default connect(null, mapDispatchToProps)(Card);
