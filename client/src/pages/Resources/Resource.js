import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import DeleteBtn from "../../components/DeleteBtn";
import Btn from "../../components/Button";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import AWS from "../../utils/AWSUtil.js";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea,File, Select, FormBtn } from "../../components/Form";




class Resources extends Component {
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
    img:"",
    selectedFile: null

  };

  componentDidMount() {
    this.loadResources();
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
    let  file = this.state.selectedFile;
    
    AWS.addPhoto(file, (data) => {
      console.log(data.Location)
      console.log("this thing worked!"+data.Location)
     this.setState({img: data.Location})

     console.log(this.state.img)
    })
    
  }
    

  handleFormSubmit = event => {
    event.preventDefault();
   console.log("hey")
   
      API.saveResource({
        names: this.state.names,
        address: this.state.address,
        offering: this.state.offering,
        category: this.state.category,
        city: this.state.city,
        description: this.state.description,
        number: this.state.number,
        state: this.state.state,
        zip: this.state.zip,
        img: this.state.img
      })
        .then(res => this.loadResource())
        .catch(err => console.log(err));
    }
  ;

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Offer Resources</h1>
            </Jumbotron>
            <form>
            
          
              <p>Name/Organization </p>
              <Input
                value={this.state.names}
                onChange={this.handleInputChange}
                name="names"
                placeholder="(required)"
              />
              <p>Product/Service</p>
              <Input
                value={this.state.product}
                onChange={this.handleInputChange}
                name="product"
                placeholder="(required)"
              />

               <p>Load Image </p>
         <File onChange={this.fileChangedHandler}
         id="inputs"
       
          />
          <Btn onClick={this.uploadHandler}>Upload!</Btn>
          <img  src={this.state.img}/>
        

              <p>Description</p>
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="(reqiured)"
              />
              <Select value={this.state.category} onChange={this.handleInputChange}
              name="category" />

              <p>Address</p>
              <Input
                value={this.state.address}
                onChange={this.handleInputChange}
                name="address"
                placeholder="(required)"
              />   
               <p>City</p>
              <Input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="(required)"
              />    
              
              <p>State</p>
              <Input
                value={this.state.state}
                onChange={this.handleInputChange}
                name="state"
                placeholder="(required)"
              />   
                <p>Offering</p>
              <Input
                value={this.state.offering}
                onChange={this.handleInputChange}
                name="offering"
                placeholder="(required)"
              />  
              
              <p>Zip</p>
              <Input
                value={this.state.zip}
                onChange={this.handleInputChange}
                name="zip"
                placeholder="(required)"
              />  
              <p>Phone Number</p>
              <Input
                value={this.state.number}
                onChange={this.handleInputChange}
                name="number"
                placeholder="(required)"
              />
              <FormBtn
               onClick={this.handleFormSubmit}
              >Submit </FormBtn>
            </form>
          </Col>
         
        </Row>
      </Container>
    );
  }
}

export default Resources;
