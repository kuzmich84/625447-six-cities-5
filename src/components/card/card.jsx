import React from "react";
import {offerPropTypes} from "../../custom-prop-types/custom-prop-types";
import {transferRatingToPercent} from "../../utils/utils";
import {Link} from "react-router-dom";
import {AppRoute} from "../../store/const";
import ButtonFavorite from "../button-favorite/button-favorite";


const buttonTitle = (<>
  <svg className="place-card__bookmark-icon" width="18" height="19">
    <use xlinkHref="#icon-bookmark"/>
  </svg>
  <span className="visually-hidden">In bookmarks</span></>);

const Card = (props) => {
  const {offer, handleHoverCard, typeCard} = props;
  const {title, price, type, isPremium, rating, isFavorite, previewImage, id} = offer;
  const link = `${AppRoute.OFFER}/${id}`;


  return (
    <article className={`${typeCard}__place-card place-card`} onMouseOver={() => handleHoverCard(offer, id)}>
      {isPremium
        ? (<div className="place-card__mark">
          <span>Premium</span>
        </div>)
        : ``}
      <div className={`${typeCard}__image-wrapper place-card__image-wrapper`}>

        <Link to={link}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonFavorite
            className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button place-card__bookmark-button button`}
            type={`button`} title={buttonTitle} offer={offer}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${transferRatingToPercent(rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={link}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);

};

Card.propTypes = offerPropTypes;

export default Card;
