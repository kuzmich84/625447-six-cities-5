import React from "react";
import propTypes from "prop-types";

const Button = (props) => {
  const {disabled = false, type = `submit`, title, className, onClick} = props;
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  disabled: propTypes.bool.isRequired,
  type: propTypes.string,
  title: propTypes.any,
  className: propTypes.string,
  onClick: propTypes.func,
};

export default Button;

