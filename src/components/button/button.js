import React from "react";
import propTypes from "prop-types";

const Button = (props) => {
  const {disabled = false, type = `submit`, title} = props;
  return (
    <button className="reviews__submit form__submit button" type={type}
            disabled={disabled}>{title}
    </button>
  );
};

Button.propTypes = {
  disabled: propTypes.bool.isRequired,
  type: propTypes.string,
  title: propTypes.string.isRequired,
};

export default Button;
