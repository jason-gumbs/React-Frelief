import React, { Component } from "react";
import Btn from "../../components/Button";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import AWS from "../../utils/AWSUtil.js";
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
      <div style={styles.container}>
        <p style={styles.head}>Offer Resources</p>
        <Input
          value={this.state.names}
          onChange={this.handleInputChange}
          name="names"
          placeholder="Name/Organization"
        />
        <Input
          value={this.state.product}
          onChange={this.handleInputChange}
          name="product"
          placeholder="Product/Service"
        />
        <File 
          onChange={this.fileChangedHandler}
          id="inputs"
        />
        <Btn onClick={this.uploadHandler}>Upload Image</Btn>
        <img  src={this.state.img}/>
        <TextArea
          value={this.state.description}
          onChange={this.handleInputChange}
          name="description"
          placeholder="Description"
        />
        <Select value={this.state.category} onChange={this.handleInputChange}
        name="category" />
        <Input
          value={this.state.address}
          onChange={this.handleInputChange}
          name="address"
          placeholder="Address"
        />   
        <Input
          value={this.state.city}
          onChange={this.handleInputChange}
          name="city"
          placeholder="City"
        />    
        <Input
          value={this.state.state}
          onChange={this.handleInputChange}
          name="state"
          placeholder="State"
        />   
        <Input
          value={this.state.offering}
          onChange={this.handleInputChange}
          name="offering"
          placeholder="Offering"
        />  
        <Input
          value={this.state.zip}
          onChange={this.handleInputChange}
          name="zip"
          placeholder="Zip"
        />  
        <Input
          value={this.state.number}
          onChange={this.handleInputChange}
          name="number"
          placeholder="Number"
        />
        <FormBtn
          onClick={this.handleFormSubmit}
        >Submit </FormBtn>
      </div>
    );
  }
}

const styles = {
  container: {
    position: "absolute",
    top: "calc(50% - 300px)",
    left: "calc(50% - 200px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "600px",
    height: "800px",
    background: "#0D1E30",
    flexWrap: "flex"
  },
  head: {
    fontSize: "50px",
    color: "#fff"
  },
  button: {
    padding: "5px",
    width: "150px",
    margin: "5px",
    backgroundColor: "#00A3FF",
    border: "none"
  },
  inputHalf: {
    width: "40%"
  }
}

export default Resources;
