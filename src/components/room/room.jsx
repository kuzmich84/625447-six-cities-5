import React from "react";
import {offerPropTypes, reviewsPropTypes} from "../../custom-prop-types/custom-prop-types";
import {transferRatingToPercent, getRandomNumber} from "../../utils/utils";
import ReviewsForm from "../reviews-form/reviews-form";
import {cityGeoCenter} from "../../mocks/constants";
import Map from "../map/map";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Header from "../header/header";
import ListReviews from "../list-reviews/list-reviews";


const Room = (props) => {
  const {reviews, offer} = props;


  const {title, images, isPremium, rating, type, bedrooms, adults, price, goods, host, isFavorite, description, id, city} = offer;
  const {avatarUrl, name, isPro} = host;
  const newReviews = reviews.slice(0, getRandomNumber(0, reviews.length));
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, i) => {
                return (<div className="property__image-wrapper" key={id + i}>
                  <img className="property__image" src={image} alt="Photo studio"/>
                </div>);
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium
                ? <div className="property__mark">
                  <span>Premium</span>
                </div>
                : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">

                  {title}
                </h1>
                <button
                  className={`property__bookmark-button ${isFavorite ? `property__bookmark-button--active` : ``}  button`}
                  type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${transferRatingToPercent(rating)}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((inside) => {
                    return (<li className="property__inside-item" key={inside}>
                      {inside}
                    </li>);
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={`property__avatar-wrapper ${isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74"
                         alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span
                  className="reviews__amount">{newReviews.length}</span></h2>
                <ListReviews reviews={newReviews}/>
                <ReviewsForm/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offer} geoCenterOfCity={cityGeoCenter[city.name]}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {/*{offers.slice(1, offers.length).map((item) => {*/}
              {/*  return (<article className="near-places__card place-card" key={item.id}>*/}
              {/*    <div className="near-places__image-wrapper place-card__image-wrapper">*/}
              {/*      <Link to={`/offer/${item.id}`}>*/}
              {/*        <img className="place-card__image" src={item.images[0]} width="260" height="200"*/}
              {/*             alt="Place image"/>*/}
              {/*      </Link>*/}
              {/*    </div>*/}
              {/*    <div className="place-card__info">*/}
              {/*      <div className="place-card__price-wrapper">*/}
              {/*        <div className="place-card__price">*/}
              {/*          <b className="place-card__price-value">&euro;{item.price}</b>*/}
              {/*          <span className="place-card__price-text">&#47;&nbsp;night</span>*/}
              {/*        </div>*/}
              {/*        <button*/}
              {/*          className={`place-card__bookmark-button ${item.isFavorite ? `place-card__bookmark-button--active` : ``}  button`}*/}
              {/*          type="button">*/}
              {/*          <svg className="place-card__bookmark-icon" width="18" height="19">*/}
              {/*            <use xlinkHref="#icon-bookmark"/>*/}
              {/*          </svg>*/}
              {/*          <span className="visually-hidden">In bookmarks</span>*/}
              {/*        </button>*/}
              {/*      </div>*/}
              {/*      <div className="place-card__rating rating">*/}
              {/*        <div className="place-card__stars rating__stars">*/}
              {/*          <span style={{width: `${transferRatingToPercent(item.rating)}%`}}/>*/}
              {/*          <span className="visually-hidden">Rating</span>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*      <h2 className="place-card__name">*/}
              {/*        <Link to={`/offer/${item.id}`}>{item.title}</Link>*/}
              {/*      </h2>*/}
              {/*      <p className="place-card__type">{item.type}</p>*/}
              {/*    </div>*/}
              {/*  </article>);*/}
              {/*})}*/}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = offerPropTypes;
Room.propTypes = reviewsPropTypes;

const mapStateToProps = ({DATA, OFFER}) => ({
  offers: DATA.offers,
  offer: OFFER.offer,
});

export {Room};
export default connect(mapStateToProps)(Room);
