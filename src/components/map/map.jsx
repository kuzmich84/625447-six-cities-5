import React, {PureComponent} from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import propTypes from "prop-types";


const style = {
  width: `100%`,
  height: `100%`,
};

const iconDefault = new L.Icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30],
});

const iconActive = new L.Icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30],
});


class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.handlerHoverMarker = this.handlerHoverMarker.bind(this);
    this.handlerUnHoverMarker = this.handlerUnHoverMarker.bind(this);
  }

  componentDidMount() {
    const {offers, geoCenterOfCity} = this.props;

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
    this.renderMarkers(offers);

  }

  componentDidUpdate() {
    const {offers, geoCenterOfCity, offer} = this.props;
    const [lat, lng] = geoCenterOfCity;
    this.map.setView(new L.LatLng(lat, lng));
    if (offer) {
      L.marker([offer.location.latitude, offer.location.longitude], {icon: iconActive}).addTo(this.map);
    }
    this.renderMarkers(offers);


  }

  handlerHoverMarker(e) {
    e.target.setIcon(iconActive);
  }

  handlerUnHoverMarker(e) {
    e.target.setIcon(iconDefault);
  }


  renderMarkers(markersData) {
    markersData.map((marker) => {
      return L.marker([marker.location.latitude, marker.location.longitude], {icon: iconDefault}).addTo(this.map).on(`mouseover`, this.handlerHoverMarker).on(`mouseout`, this.handlerUnHoverMarker);
    });
  }

  render() {
    return (
      <div id="map" style={style}/>
    );
  }
}

Map.propTypes = {
  geoCenterOfCity: propTypes.array,
  offers: propTypes.array.isRequired,
  offer: propTypes.object,
};


export default Map;

