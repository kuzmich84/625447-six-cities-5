import React from "react";
import propTypes from "prop-types";

const Input = (props) => {
  const {inputClassName, name, value, type, onChange, htmlFor, labelClassName, title, label, required} = props;
  return (
    <><input
      className={inputClassName}
      name={name}
      value={value}
      id={htmlFor}
      type={type}
      onChange={onChange}
      required={required}/>
      <label htmlFor={htmlFor} className={labelClassName} title={title}>
        {label}
      </label>
    </>
  );
};

Input.propTypes = {
  inputClassName: propTypes.string,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  htmlFor: propTypes.string.isRequired,
  labelClassName: propTypes.string,
  title: propTypes.string.isRequired,
  label: propTypes.any,
  required: propTypes.bool,
};

export default Input;
