import React, {PureComponent} from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {offersPropTypes} from "../../customPropTypes/customPropTypes";
import propTypes from "prop-types";
import {getOffersOfCity} from "../../store/selectors/offers-selectors";
import {connect} from "react-redux";


const style = {
  width: `100%`,
  height: `100%`,
};

const icon = L.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30],
});

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offersOfCity, geoCenterOfCity} = this.props;

    this.map = L.map(`map`, {
      center: geoCenterOfCity,
      zoom: 12,
      zoomControl: false,
      marker: true,
      layers: [
        L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
        }),
      ],
    });
    this.renderMarkers(offersOfCity);
  }

  componentDidUpdate() {
    const {offersOfCity, geoCenterOfCity} = this.props;
    const [lat, lng] = geoCenterOfCity;
    this.map.setView(new L.LatLng(lat, lng));
    this.renderMarkers(offersOfCity);


  }

  renderMarkers(markersData) {
    markersData.map((marker) => {
      return L.marker([marker.location.latitude, marker.location.longitude], {icon}).addTo(this.map);
    });
  }

  render() {
    return (
      <div id="map" style={style}/>
    );
  }
}

Map.propTypes = offersPropTypes;
Map.propTypes = {
  geoCenterOfCity: propTypes.array,
};

const mapStateToProps = (state) => ({
  offersOfCity: getOffersOfCity(state),
});

export {Map};
export default connect(mapStateToProps)(Map);

