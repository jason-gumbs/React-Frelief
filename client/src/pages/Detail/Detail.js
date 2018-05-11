import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import { Container,Row,Col } from "../../components/Grid";

class Detail extends Component {
  state = {
    Resources: []
  
  };

  componentDidMount() {
 
    API.getResourcebyId(this.props.match.params.id)
      .then(res => this.setState({Resources: res.data }))
      .catch(err => console.log(err));
  }

 


  render() {
    return (
      <Container>
        <div className="col-md-4 col-md-offset-4 mt-5">
         <div classame="card">
  <div classame="card-header text-center">
 Details
  </div>
  <div className="card-body">
    <h5 classame="card-title">{this.state.Resources.offering}</h5>
    <p classame="card-text">{this.state.Resources.description}</p>
    {this.state.Resources.category}
    <small>{this.state.Resources.address} </small>
    <br/>
    <small>{this.state.Resources.city}{this.state.Resources.state}{this.state.Resources.zip}</small>
    <br/>
    <small>{this.state.Resources.name}{this.state.Resources.number}</small>
 
  </div>
</div>
</div>


      </Container>
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
    width: "400px",
    height: "600px",
    background: "#0D1E30"
  },
  head: {
    fontSize: "50px",
    color: "#fff"
  }
}

export default Detail;
