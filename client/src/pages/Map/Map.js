import mapboxgl from 'mapbox-gl';
import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Btn from "../../components/Button";
import Map from "../../components/Map";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import AWS from "../../utils/AWSUtil.js";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea,File, Select, FormBtn } from "../../components/Form";
require('dotenv').config();





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
    this.loadResources();
     mapboxgl.accessToken = "YOURAPIKEY";
  
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

  loadResources = () => {
    API.getResource()
      .then(res =>
        this.setState({ Resources: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteResource = id => {
    API.deleteResource(id)
      .then(res => this.loadResources())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  fileChangedHandler = (event) => {
    this.setState({selectedFile: event.target.files[0]})
  }
  uploadHandler = (event) => { 
    event.preventDefault();
   
  }

  handleFormSubmit = event => {
    event.preventDefault();
   console.log("hey")
    if (this.state.names && this.state.address) {
      API.saveResource({
        names: this.state.names,
        address: this.state.address,
        offering: this.state.offering,
        category: this.state.category,
        city: this.state.city,
        description: this.state.description,
        number: this.state.number,
        state: this.state.state,
        zip: this.state.zip
      })
        .then(res => this.loadResource())
        .catch(err => console.log(err));
    }
  };



  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6" className="m-auto">
            <Jumbotron>
              <h1>Map</h1>
            </Jumbotron>
            <Map>

              </Map>
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default Maps;
