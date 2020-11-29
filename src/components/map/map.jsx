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
    this.markers = [];
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

  componentDidUpdate(prevProps) {
    const {offers, geoCenterOfCity, offer, activeId, hoverOffer} = this.props;
    const [lat, long] = geoCenterOfCity;
    this.map.setView(new L.LatLng(lat, long));
    this.removeMarkers();
    this.renderMarkers(offers);


    if (Object.keys(offer).length !== 0) {
      this.renderMarker(offer, iconActive);
    }

    if (Object.keys(hoverOffer).length !== 0 && hoverOffer.id !== prevProps.hoverOffer.id) {
      const {location} = hoverOffer;
      const {latitude, longitude} = location;
      this.map.setView(new L.LatLng(latitude, longitude));
      this.renderMarker(hoverOffer, iconActive);
    }

    if (activeId !== prevProps.activeId && activeId === null) {
      this.renderMarkers(offers);
    }
  }

  renderMarker(data, iconView) {
    return L.marker([data.location.latitude, data.location.longitude], {icon: iconView}).addTo(this.map);
  }

  renderMarkers(markersData) {
    markersData.map((item) => {
      const marker = this.renderMarker(item, iconDefault);
      this.markers = [...this.markers, marker];
    });
  }

  removeMarkers() {
    this.markers.forEach((marker) => {
      marker.remove(this.map);
    });
    this.markers = [];
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
  hoverOffer: propTypes.object.isRequired,
  activeId: propTypes.number,
};


export default Map;
