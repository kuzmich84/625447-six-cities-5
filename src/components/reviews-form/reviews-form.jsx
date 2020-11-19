import React, {PureComponent} from "react";
import Input from "../input/input";
import Button from "../button/button";
import {connect} from "react-redux";
import {commentPost, fetchOfferReviews} from "../../store/api-actions";
import propTypes from "prop-types";
import {getActiveId, getIsLoading, getIsSending} from "../../store/selectors/offers-selectors";
import {isSending as isSendingAction} from "../../store/action";

const star = <svg className="form__star-image" width="37" height="33">
  <use xlinkHref="#icon-star"/>
</svg>;

const titles = [`terribly`, `badly`, `not bad`, `good`, `perfect`];

const defaultState = () => {
  return {
    isFormValid: false,
    formControls: {
      rating: {
        value: null,
        valid: false,
        validation: {
          value: 0,
        },
      },
      describe: {
        value: null,
        valid: false,
        validation: {
          minLength: 50,
          maxLength: 300,
        },
      },
    },
  }
};

class ReviewsForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = defaultState();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  validateControl(value, validation) {

    if (!validation) {
      return true;
    }

    let isValid = true;


    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    if (validation.maxLength) {
      isValid = value.length <= validation.maxLength && isValid;
    }

    if (validation.value) {
      isValid = value > 0 && isValid;
    }

    return isValid;
  }

  handleChange(event, controlName) {
    const formControls = Object.assign({}, this.state.formControls);
    const control = Object.assign({}, formControls[controlName]);

    control.value = event.target.value;
    control.valid = this.validateControl(control.value, control.validation);
    formControls[controlName] = control;

    let isFormValid = true;
    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({
      formControls, isFormValid,
    });
  }

  handleSubmit(event) {

    const {onSentComment, offerId, setIsSending, isSending} = this.props;
    event.preventDefault();
    setIsSending(true);

    onSentComment(offerId, {
      comment: this.state.formControls.describe.value,
      rating: this.state.formControls.rating.value,
    });

    if (!isSending) {

      this.setState(
        defaultState()
      );
    }
  }

  renderInputs() {
    return titles.map((title, index) => <Input
      key={title}
      inputClassName={`form__rating-input visually-hidden`}
      labelClassName={`reviews__rating-label form__rating-label`}
      name={`rating`}
      value={`${index + 1}`}
      type={`radio`}
      onChange={(event) => this.handleChange(event, `rating`)}
      htmlFor={`${index + 1}-stars`}
      title={`${title}`}
      label={star}
      disabled={this.props.isSending}
    />).reverse();
  }

  render() {
    return (<form onSubmit={this.handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {this.renderInputs()}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
                onChange={(event) => this.handleChange(event, `describe`)}
                placeholder="Tell how was your stay, what you like and what can be improved"
                disabled={this.props.isSending}/>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <Button disabled={!this.state.isFormValid || this.props.isSending} title={`Submit`}/>
      </div>
    </form>);
  }
}

ReviewsForm.propTypes = {
  onSentComment: propTypes.func.isRequired,
  offerId: propTypes.string.isRequired,
  setIsSending: propTypes.func.isRequired,
  isSending: propTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offerId: getActiveId(state),
  isSending: getIsSending(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSentComment(offerId, comment) {
    dispatch(commentPost(offerId, comment));
  },
  setIsSending(bull) {
    dispatch(isSendingAction(bull));
  },
});


export {ReviewsForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);
