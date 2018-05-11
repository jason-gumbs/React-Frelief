import mapboxgl from 'mapbox-gl';
import React, { Component } from "react";
import Map from "../../components/Map";
import API from "../../utils/API";

class Maps extends Component {
  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1Ijoid2lsbGd1bWJzIiwiYSI6ImNqZ2xjOTdnaTAwbzIzM28xZXF3djNyNWQifQ.r7YWLO3IZGSdkzkSoboaqQ";
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

  render() {
    return (
      <div>
        <h1>Map</h1>
        <Map/>
      </div>
    );
  }
}

export default Maps;
