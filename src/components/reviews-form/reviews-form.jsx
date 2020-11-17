import React, {PureComponent} from "react";
import Input from "../input/input";
import {extend} from "../../utils/utils";

const star = <svg className="form__star-image" width="37" height="33">
  <use xlinkHref="#icon-star"/>
</svg>;

const titles = [`terribly`, `badly`, `not bad`, `good`, `perfect`];

export default class ReviewsForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
      rating: {
        checkedValue: 0,
        errorMessage: `You have to set rating`,
        valid: false,
        touched: false,
        validation: true,
      },
      describe: {
        value: ``,
        errorMessage: `You have to describe at least 50 and no more than 300 characters`,
        valid: false,
        touched: false,
        validation: {
          minLength: 50,
          maxLength: 300
        },
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }
    let isValid = true;

    if (validation.minLength) {
      isValid = value.length >= validation.maxLength && isValid;
    }

    if (validation.maxLength) {
      isValid = value.length <= validation.maxLength && isValid;
    }

    if (validation) {
      isValid = value.checkedValue >= 0 && isValid;
    }

    return isValid;
  }

  handleChange(event, controlName) {
    const describe = Object.assign({}, this.state.describe);
    const control = Object.assign({}, describe[controlName]);
    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);
    describe[controlName] = control;
    this.setState({
      describe
    });


  }

  handleChecked(event) {
    this.setState(extend(this.state.rating, {
        checkedValue: event.target.value,
        valid: this.validateControl(this.value, this.validation),
      })
    );
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  renderInputs() {
    return titles.map((title, index) => <Input
      key={title}
      inputClassName={`form__rating-input visually-hidden`}
      labelClassName={`reviews__rating-label form__rating-label`}
      name={`rating`}
      value={`${index + 1}`}
      type={`radio`}
      onChange={this.handleChecked}
      htmlFor={`${index + 1}-stars`}
      title={`${title}`}
      label={star}/>).reverse();
  }

  render() {
    return (<form onSubmit={this.handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {this.renderInputs()}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" onChange={this.handleChange}
                placeholder="Tell how was your stay, what you like and what can be improved"/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>);
  }
}
