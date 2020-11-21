import React, {PureComponent} from "react";
import {offerPropTypes, reviewsPropTypes} from "../../custom-prop-types/custom-prop-types";
import {transferRatingToPercent} from "../../utils/utils";
import ReviewsForm from "../reviews-form/reviews-form";
import {cityGeoCenter} from "../../mocks/constants";
import Map from "../map/map";
import {connect} from "react-redux";
import Header from "../header/header";
import ListReviews from "../list-reviews/list-reviews";
import {fetchOffer, fetchOfferNearby, fetchOfferReviews} from "../../store/api-actions";
import {activeId as activeIdAction, isLoading as isLoadingAction} from "../../store/action";
import ListCardsNearby from "../list-nearby-cards/list-nearby-cards";
import {
  getActiveId, getError,
  getIsLoading,
  getNearbyOffers,
  getOffer,
} from "../../store/selectors/offers-selectors";
import {getAuthorizationStatus} from "../../store/selectors/user-selectors";
import {AuthorizationStatus} from "../../store/const";
import {getSortedReviewsOfDate} from "../../store/selectors/reviews-selectors";

class Room extends PureComponent {
  constructor(props) {
    super(props);
    this.renderTemplate = this.renderTemplate.bind(this);
  }

  componentDidMount() {
    const {offerId} = this.props;
    this.props.setIsLoading(true);
    this.props.loadOfferServer(offerId);
    this.props.loadReviews(offerId);
    this.props.loadNearby(offerId);
  }

  renderTemplate() {
    const {isLoading, activeId, error} = this.props;
    if (!error) {
      if (isLoading) {
        return <p>Загружаю...</p>;

      } else if (activeId) {

        const {reviews, offer, nearby, authorizationStatus} = this.props;
        const {title, images, isPremium, rating, type, bedrooms, adults, price, goods, host, isFavorite, description, id, city} = offer;
        const {avatarUrl, name, isPro} = host;

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
                  <Map offers={nearby} geoCenterOfCity={cityGeoCenter[city.name]}/>
                </section>
              </section>
              <div className="container">
                <section className="near-places places">
                  <h2 className="near-places__title">Other places in the neighbourhood</h2>
                  <ListCardsNearby offers={nearby}/>
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

});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
