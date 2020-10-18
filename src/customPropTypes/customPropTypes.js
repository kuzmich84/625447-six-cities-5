import propTypes from "prop-types";

const offerPropTypes = {
  offer: propTypes.shape({
    id: propTypes.number.isRequired,
    city: propTypes.string.isRequired,
    geo: propTypes.array.isRequired,
    title: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.string).isRequired,
    smallImage: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    type: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    isPremium: propTypes.bool,
    isFavorite: propTypes.bool,
    bedrooms: propTypes.number.isRequired,
    adults: propTypes.number.isRequired,
    insideList: propTypes.arrayOf(propTypes.string).isRequired,
    owner: propTypes.shape({
      avatar: propTypes.string,
      name: propTypes.string.isRequired,
      isPro: propTypes.bool.isRequired
    }),
    description: propTypes.arrayOf(propTypes.string).isRequired,
  }),
  handleHoverCard: propTypes.func,
};

const offersPropTypes = {
  offers: propTypes.array.isRequired
};
const reviewsPropTypes = {reviews: propTypes.array.isRequired};

const cityGeoCenterPropTypes = {cityGeoCenter: propTypes.object.isRequired};

export {offerPropTypes, offersPropTypes, reviewsPropTypes, cityGeoCenterPropTypes};
