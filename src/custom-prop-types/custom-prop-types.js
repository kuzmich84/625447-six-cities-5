import propTypes from "prop-types";

const offerPropTypes = {
  offer: propTypes.shape({
    id: propTypes.number,
    city: propTypes.shape({
      name: propTypes.string.isRequired,
      location: propTypes.shape({
        latitude: propTypes.number.isRequired,
        longitude: propTypes.number.isRequired,
        zoom: propTypes.number.isRequired
      })
    }),
    geo: propTypes.array,
    title: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.string).isRequired,
    smallImage: propTypes.string,
    price: propTypes.number,
    type: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    isPremium: propTypes.bool.isRequired,
    isFavorite: propTypes.bool.isRequired,
    bedrooms: propTypes.number.isRequired,
    maxAdults: propTypes.number.isRequired,
    host: propTypes.shape({
      id: propTypes.number.isRequired,
      avatarUrl: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isPro: propTypes.bool.isRequired
    }),
  }),
  handleHoverCard: propTypes.func,
  description: propTypes.string,
  goods: propTypes.arrayOf(propTypes.string)
};

const offersPropTypes = {
  offers: propTypes.array
};
const reviewsPropTypes = {reviews: propTypes.array};

const cityGeoCenterPropTypes = {cityGeoCenter: propTypes.object};

export {offerPropTypes, offersPropTypes, reviewsPropTypes, cityGeoCenterPropTypes};
