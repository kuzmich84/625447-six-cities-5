import React from "react";
import {connect} from "react-redux";
import {changeFilter} from "../../store/action";
import propTypes from "prop-types";

const Filter = (props) => {
  const {changeFilterAction, value} = props;

  const handleChange = (evt) => {
    changeFilterAction(evt.target.value);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <select className="places__sorting-type" id="places-sorting" onChange={handleChange} value={value}>
        <option className="places__option" value="popular">Popular</option>
        <option className="places__option" value="to-high">Price: low to high</option>
        <option className="places__option" value="to-low">Price: high to low</option>
        <option className="places__option" value="top-rated">Top rated first</option>
      </select>
    </form>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  changeFilterAction: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilterAction: (value) => dispatch(changeFilter(value)),
});

export {Filter};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
