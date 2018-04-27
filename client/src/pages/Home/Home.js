import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Btn from "../../components/Button";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, Select, FormBtn } from "../../components/Form";

class Home extends Component {
    
  
    render() {
      return (
        <Container>
        <Row>
            <Col>
        
      
      <div id="content">
        <p>FREE DISASTER RELIEF RESOURCES</p>
        <a href="search_pg.html"><Btn >SEARCH</Btn></a>
        <a href="/resource"><Btn>OFFER RESOURCES</Btn></a>
      </div>
      <p id="copywrite">FREILIEF © 2018</p> 
   
    </Col>
    </Row>
 
        
        </Container>
      );
    }
  }
  
  export default Home;