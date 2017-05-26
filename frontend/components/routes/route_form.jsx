import React from 'react';

import NavBarContainer from '../navbar/nav_bar_container';
import { mToFt } from '../../util/unit_conversions';

// The map centers on San Francisco by default
const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194
};

class RouteForm extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.elevationService = new google.maps.ElevationService();

    this.state = {
      waypoints: [],
      name: 'test',
      distance: null,
      elevation: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleDirections = this.handleDirections.bind(this);
    this.handleElevationResponse = this.handleElevationResponse.bind(this);
  }

  buildWaypoints() {
    return (
      this.state.waypoints.slice(1, this.state.waypoints.length - 1)
        .map(wp => ({
          location: wp,
          stopover: true
        }))
    );
  }

  buildRequest() {
    const origin = this.state.waypoints[0];
    const destination = this.state.waypoints[this.state.waypoints.length - 1];
    const waypoints = this.buildWaypoints();

    return {
      origin,
      destination,
      waypoints,
      travelMode: 'WALKING',
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      optimizeWaypoints: false
    };
  }

  handleElevationResponse(result, status) {
    if (status === 'OK') {
      const elevation = Math.round(
        mToFt(result[1].elevation - result[0].elevation)
      );
      this.setState({ elevation }, () => console.log(elevation));
    }
  }

  calculateDistance(legs) {
    const distance = legs.map(leg => parseFloat(leg.distance.text))
                         .reduce((acc, val) => acc + val);
    this.setState({ distance });
  }

  calculateElevation() {
    const endpoints = [
      this.state.waypoints[0],
      this.state.waypoints[this.state.waypoints.length - 1]
    ];

    this.elevationService.getElevationForLocations({
      locations: endpoints
    }, this.handleElevationResponse);
  }

  handleDirections(result, status) {
    if (status === 'OK') {
      this.calculateDistance(result.routes[0].legs);
      this.calculateElevation();
      this.directionsDisplay.setDirections(result);
    }
  }

  calculateRoute() {
    if (this.state.waypoints.length > 1) {
      this.directionsService.route(this.buildRequest(), this.handleDirections);
    }
  }

  handleClick(e) {
    const marker = new google.maps.Marker({
      position: e.latLng,
      map: this.map
    });

    this.state.waypoints.push(e.latLng);
    this.calculateRoute();
  }

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: defaultCenter,
      zoom: 12
    });
    this.directionsDisplay.setMap(this.map);
    this.map.addListener('click', this.handleClick);
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <div id="map"></div>
      </div>
    );
  }
}

export default RouteForm;
