import React from 'react';

class RouteForm extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;

    this.state = {
      waypoints: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const marker = new google.maps.Marker({
      position: e.latLng,
      map: this.map
    });

    this.state.waypoints.push(e.latLng);
  }

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });

    this.map.addListener('click', this.handleClick);
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

export default RouteForm;
