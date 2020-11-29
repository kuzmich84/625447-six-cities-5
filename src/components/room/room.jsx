import React, {PureComponent} from "react";
import {offerPropTypes, reviewsPropTypes} from "../../custom-prop-types/custom-prop-types";
import {transferRatingToPercent, shuffle} from "../../utils/utils";
import ReviewsForm from "../reviews-form/reviews-form";
import {cityGeoCenter} from "../../mocks/constants";
import Map from "../map/map";
import {connect} from "react-redux";
import Header from "../header/header";
import ListReviews from "../list-reviews/list-reviews";
import {fetchOffer, fetchOfferNearby, fetchOfferReviews, toggleFavoriteRoom} from "../../store/api-actions";
import {
  activeId as activeIdAction,
  isLoading as isLoadingAction,
  loadHoverOffer as loadHoverOfferAction, redirectToRoute,
} from "../../store/action";
import ListCardsNearby from "../list-nearby-cards/list-nearby-cards";
import {
  getActiveId, getError, getHoverOffer, getIsFavorite,
  getIsLoading,
  getNearbyOffers,
  getOffer,
} from "../../store/selectors/offers-selectors";
import {getAuthorizationStatus} from "../../store/selectors/user-selectors";
import {AppRoute, AuthorizationStatus} from "../../store/const";
import {getSortedReviewsOfDate} from "../../store/selectors/reviews-selectors";
import Button from "../button/button";

const buttonTitle = (<>
  <svg className="property__bookmark-icon" width="31" height="33">
    <use xlinkHref="#icon-bookmark"/>
  </svg>
  <span className="visually-hidden">To bookmarks</span></>);

class Room extends PureComponent {
  constructor(props) {
    super(props);
    this.renderTemplate = this.renderTemplate.bind(this);
  }

  componentDidMount() {
    const {match, offer} = this.props;
    const {params: {offerId}} = match;
    this.props.setIsLoading(true);
    this.props.loadOfferServer(offerId);
    this.props.loadReviews(offerId);
    this.props.loadNearby(offerId);
    this.props.loadHoverOffer(offer);
  }

  componentDidUpdate(prevProps) {
    const {match, offer} = this.props;
    const {params: {offerId}} = match;
    if (match !== prevProps.match) {
      this.props.setIsLoading(true);
      this.props.loadOfferServer(offerId);
      this.props.loadReviews(offerId);
      this.props.loadNearby(offerId);
      this.props.loadHoverOffer(offer);
    }
  }

  renderTemplate() {
    const {isLoading, error, match, activeId} = this.props;
    const {params: {offerId}} = match;
    if (!error) {
      if (isLoading) {
        return <p>Загружаю...</p>;

      } else if (offerId) {

        const {reviews, offer, nearby, authorizationStatus, toggleFavorite, hoverOffer} = this.props;
        const {title, images, isPremium, rating, type, bedrooms, adults, price, goods, host, description, id, city, isFavorite} = offer;
        const {avatarUrl, name, isPro} = host;

        const getImages = shuffle(images).slice(0, 6);

        return (
          <div className="page">
            <Header/>
            <main className="page__main page__main--property">
              <section className="property">
                <div className="property__gallery-container container">
                  <div className="property__gallery">
                    {getImages.map((image, i) => {
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
                      <Button disabled={false} title={buttonTitle} type={`button`}
                        className={`property__bookmark-button ${isFavorite ? `property__bookmark-button--active` : ``}  button`}
                        onClick={() => toggleFavorite(offer, authorizationStatus)}/>
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
                        className="reviews__amount">{reviews.length}</span></h2>
                      <ListReviews reviews={reviews}/>
                      {authorizationStatus === AuthorizationStatus.AUTH
                        ? <ReviewsForm/>
                        : null
                      }
                    </section>
                  </div>
                </div>
                <section className="property__map map">
                  <Map offers={nearby} hoverOffer={hoverOffer} offer={offer} activeId={activeId}
                    geoCenterOfCity={cityGeoCenter[city.name]}/>
                </section>
              </section>
              <div className="container">
                <section className="near-places places">
                  <h2 className="near-places__title">Other places in the neighbourhood</h2>
                  <ListCardsNearby nearbyOffers={nearby}/>
                </section>
              </div>
            </main>
          </div>
        );
      } else {
        return <p>Загружаю...</p>;
      }
    } else {
      return <p>Страница не найдена</p>;
    }
  }


  render() {
    return this.renderTemplate();
  }
}


Room.propTypes = offerPropTypes;
Room.propTypes = reviewsPropTypes;

const mapStateToProps = (state) => ({
  offer: getOffer(state),
  activeId: getActiveId(state),
  reviews: getSortedReviewsOfDate(state),
  nearby: getNearbyOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
  isLoading: getIsLoading(state),
  error: getError(state),
  isFavorite: getIsFavorite(state),
  hoverOffer: getHoverOffer(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadOfferServer(offerId) {
    dispatch(fetchOffer(offerId));
  },
  setIsLoading(bull) {
    dispatch(isLoadingAction(bull));
  },
  setActiveId(offerId) {
    dispatch(activeIdAction(offerId));
  },
  loadReviews(offerId) {
    dispatch(fetchOfferReviews(offerId));
  },
  loadNearby(offerId) {
    dispatch(fetchOfferNearby(offerId));
  },
  toggleFavorite(offer, status) {
    return status === AuthorizationStatus.AUTH ? dispatch(toggleFavoriteRoom(offer)) : dispatch(redirectToRoute(AppRoute.LOGIN));
  },
  loadHoverOffer(offer) {
    dispatch(loadHoverOfferAction(offer));
  },
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
