import React, {PureComponent} from "react";
import Input from "../input/input";
import Button from "../button/button";
import {connect} from "react-redux";
import {commentPost, fetchOfferReviews} from "../../store/api-actions";
import propTypes from "prop-types";
import {getActiveId} from "../../store/selectors/offers-selectors";
import {getErrorReviews, isSendingReview as isSendingAction} from "../../store/action";
import {getErrorOfReviews, getIsSendingOfReviews, getIsSendReview} from "../../store/selectors/reviews-selectors";

const star = <svg className="form__star-image" width="37" height="33">
  <use xlinkHref="#icon-star"/>
</svg>;

const titles = [`terribly`, `badly`, `not bad`, `good`, `perfect`];

const defaultState = () => {
  return {
    isFormValid: false,
    formControls: {
      rating: {
        value: ``,
        valid: false,
        validation: {
          value: 0,
        },
      },
      describe: {
        value: ``,
        valid: false,
        validation: {
          minLength: 50,
          maxLength: 300,
        },
      },
    },
  };
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

  sendReview() {
    const {onSentComment, offerId, error} = this.props;
    if (!error) {

      onSentComment(offerId, {
        comment: this.state.formControls.describe.value,
        rating: this.state.formControls.rating.value,
      });

    } else {
      console.log(error);
    }
  }

  clearForm() {
    return this.setState(defaultState());
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendReview();
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
      checked={this.state.formControls.rating.value}
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
        disabled={this.props.isSending}
        value={this.state.formControls.describe.value}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <Button disabled={!this.state.isFormValid || this.props.isSending} title={`Submit`} className={`reviews__submit form__submit button`}/>
      </div>
    </form>);
  }
}

ReviewsForm.propTypes = {
  onSentComment: propTypes.func.isRequired,
  offerId: propTypes.number,
  setIsSending: propTypes.func.isRequired,
  isSending: propTypes.bool.isRequired,
  loadReviews: propTypes.func.isRequired,
  error: propTypes.any,
  isSend: propTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offerId: getActiveId(state),
  isSending: getIsSendingOfReviews(state),
  error: getErrorOfReviews(state),
  isSend: getIsSendReview(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSentComment(offerId, comment, func) {
    dispatch(commentPost(offerId, comment, func));
  },
  setIsSending(bull) {
    dispatch(isSendingAction(bull));
  },
  loadReviews(offerId) {
    dispatch(fetchOfferReviews(offerId));
  },
});


export {ReviewsForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);
