import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {fetchOffer} from "../store/api-actions";
import propTypes from "prop-types";
import {isLoading as isLoadingAction} from "../store/action";

export const withActiveLoad = (Component) => {
  class WithActiveLoad extends PureComponent {
    constructor(props) {
      super(props);
      this.renderTemplate = this.renderTemplate.bind(this);
    }

    componentDidMount() {
      this.props.setIsLoading(true);
      this.props.loadOfferServer();
    }

    renderTemplate() {
      const {isLoading} = this.props;

      if (isLoading) {
        return <p>Загружаю...</p>;
      } else {
        return (<Component
          {...this.props}
        >
        </Component>);
      }
    }

    render() {
      return this.renderTemplate();
    }

  }

  WithActiveLoad.propTypes = {
    loadOfferServer: propTypes.func.isRequired,
    activeId: propTypes.number.isRequired,
    setIsLoading: propTypes.func.isRequired,
    isLoading: propTypes.bool.isRequired
  };


  const mapStateToProps = ({OFFER}) => ({
    activeId: OFFER.activeId,
    isLoading: OFFER.isLoading,
  });

  const mapDispatchToProps = (dispatch) => ({
    loadOfferServer(offerId) {
      dispatch(fetchOffer(offerId));
    },
    setIsLoading(bull) {
      dispatch(isLoadingAction(bull));
    }
  });


  return connect(mapStateToProps, mapDispatchToProps)(WithActiveLoad);
};

