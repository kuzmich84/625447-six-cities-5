import propTypes from "prop-types";

const offerPropTypes = {
  offer: propTypes.shape({
    title: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.string).isRequired,
    price: propTypes.number.isRequired,
    type: propTypes.string.isRequired,
    isPremium: propTypes.bool,
    isFavorite: propTypes.bool,
    isisPremium: propTypes.func,
    rating: propTypes.number.isRequired,
  }),
  handleHover: propTypes.func,
};

export default offerPropTypes;
