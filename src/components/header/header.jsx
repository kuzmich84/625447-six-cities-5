import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../store/const";
import propTypes from "prop-types";

const Header = (props) => {
  const {authorizationStatus} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/></Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={
                  authorizationStatus === AuthorizationStatus.AUTH
                    ? AppRoute.FAVORITES
                    : AppRoute.LOGIN
                }>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className={
                    authorizationStatus === AuthorizationStatus.AUTH
                      ? `header__user-name user__name`
                      : `header__login`
                  }>{
                      authorizationStatus === AuthorizationStatus.AUTH
                        ? `Oliver.conner@gmail.com`
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
};


const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});


export {Header};
export default connect(mapStateToProps)(Header);
