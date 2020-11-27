import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus, defaultCity} from "../../store/const";
import propTypes from "prop-types";
import {fetchFavorite} from "../../store/api-actions";
import {changeCity as changeCityAction, loadOffersOfCity} from "../../store/action";
import {getOffersUtils} from "../../utils/utils";
import {getAuthorizationStatus, getAvatar, getEmail} from "../../store/selectors/user-selectors";
import {getOffers} from "../../store/selectors/offers-selectors";


const Header = (props) => {
  const {authorizationStatus, email, avatar, getFavorite, changeCity, offers} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={`${AppRoute.ROOT}`} className="header__logo-link header__logo-link--active" onClick={() => changeCity(defaultCity, offers)}>
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/></Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={
                  authorizationStatus === AuthorizationStatus.AUTH
                    ? AppRoute.FAVORITES
                    : AppRoute.LOGIN
                } onClick={authorizationStatus === AuthorizationStatus.AUTH ? () => getFavorite() : null}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"
                    style={{backgroundImage: `url(${avatar})`, borderRadius: `50%`}}>
                  </div>
                  <span className={
                    authorizationStatus === AuthorizationStatus.AUTH
                      ? `header__user-name user__name`
                      : `header__login`
                  }>{
                      authorizationStatus === AuthorizationStatus.AUTH
                        ? email
                        : `Sign in`
                    }</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: propTypes.string.isRequired,
  email: propTypes.string,
  avatar: propTypes.string,
  getFavorite: propTypes.func.isRequired,
  changeCity: propTypes.func.isRequired,
  offers: propTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  email: getEmail(state),
  avatar: getAvatar(state),
  offers: getOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFavorite() {
    dispatch(fetchFavorite());
  },
  changeCity(city, offers) {
    dispatch(changeCityAction(city));
    dispatch(loadOffersOfCity(getOffersUtils(offers, city)));
  }
});


export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
