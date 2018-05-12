import mapboxgl from 'mapbox-gl';
import React, { Component } from "react";
import Map from "../../components/Map";
import API from "../../utils/API";

class Maps extends Component {
  state = {
    Resources: [],
    names: "",
    product: "",
    address: "",
    offering: "",
    category: "",
    city: "",
    description: "",
   number: "",
    state: "",
    zip: "",
    selectedFile: null

  };

  componentDidMount() {

     mapboxgl.accessToken = "pk.eyJ1IjoiamltYm9raXJrbGFuZCIsImEiOiJjamZ6bmFkMHIwZncxMnhxcHNxZmoxbmFhIn0.mo-WzL8Onm3M-KqHOw9Iwg";
    //pk.eyJ1IjoiamltYm9raXJrbGFuZCIsImEiOiJjamZ6bmFkMHIwZncxMnhxcHNxZmoxbmFhIn0.mo-WzL8Onm3M-KqHOw9Iwg
    const map = new mapboxgl.Map({
      
        container: 'map',
        style: 'mapbox://styles/null/null',  //'mapbox://styles/mapbox/streets-v9',
        center: [-84.4, 33.75],
        zoom: 8 
    });

  //   const nightMap = new mapboxgl.Map({
  //     container: 'map',
  //     style: 'mapbox://styles/mapbox/light-v9',
  //     center: [-84.4, 33.75],
  //     zoom: 8 
  // });

    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    var hour = new Date().getHours();
    console.log(hour)
    if (hour >= 20 || hour <= 7) {
      switchLayer("dark")
    } else {
      switchLayer("light")
    }


      function switchLayer(layer) {
        console.log("start")
        map.setStyle(`mapbox://styles/mapbox/${layer}-v9`)
        console.log("end")
      };


      var popup = new mapboxgl.Popup()
      .setHTML('<h1>AID</h1>');

      var popup2 = new mapboxgl.Popup()
      .setHTML('<h1>FOOD</h1>');

      var popup3 = new mapboxgl.Popup()
      .setHTML('<h1>WATER</h1>');


      var marker1 = new mapboxgl.Marker()
      .setLngLat([-84.4,33.7])
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);

      var marker2 = new mapboxgl.Marker()
      .setLngLat([-84.362, 33.75])
      .setPopup(popup2) // sets a popup on this marker
      .addTo(map);

      var marker3 = new mapboxgl.Marker()
      .setLngLat([-84.4902, 33.7501])
      .setPopup(popup3) // sets a popup on this marker
      .addTo(map);

    };

  render() {
    return (
      <div>
        <h1 className="text-center">Map</h1>
        <Map/>
      </div>
    );
  }
}

export default Maps;
