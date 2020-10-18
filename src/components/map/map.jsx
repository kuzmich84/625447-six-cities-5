import React, {PureComponent} from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {offersPropTypes} from "../../customPropTypes/customPropTypes";

const style = {
  width: `100%`,
  height: `100%`
};

const icon = L.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30]
});

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers, cityGeoCenter} = this.props;

    this.map = L.map(`map`, {
      center: cityGeoCenter,
      zoom: 12,
      zoomControl: false,
      marker: true,
      layers: [
        L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }),
      ]
    });


    this.renderMarkers(offers);
  }

  renderMarkers(markersData) {
    markersData.map((marker) => {
      return L.marker(marker.geo, {icon}).addTo(this.map);
    });
  }

  render() {
    return (
      <div id="map" style={style}/>
    );
  }
}

Map.propTypes = offersPropTypes;

export default Map;
