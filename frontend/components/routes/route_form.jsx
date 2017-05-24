import React from 'react';

class RouteForm extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();

    this.state = {
      waypoints: []
    };

    this.initMap = this.initMap.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDirections = this.handleDirections.bind(this);
  }

  buildWaypoints() {
    return (
      this.state.waypoints.slice(1, this.state.waypoints.length - 1)
        .map(wp => ({
          location: { lat: wp.lat(), lng: wp.lng() },
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
      optimizeWaypoints: false
    };
  }

  handleDirections(result, status) {
    // console.log('Received result');
    if (status === 'OK') {
      this.directionsDisplay.setDirections(result);
    }
  }

  calculateRoute() {
    if (this.state.waypoints.length > 1) {
      // console.log('About to send request');
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

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.initMap(position.coords.latitude, position.coords.longitude);
      this.map.addListener('click', this.handleClick);
    });
  }

  initMap(lat, lng) {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat, lng },
      zoom: 12
    });
    this.directionsDisplay.setMap(this.map);
  }

  componentDidMount() {
    this.getCurrentLocation();
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

export default RouteForm;
