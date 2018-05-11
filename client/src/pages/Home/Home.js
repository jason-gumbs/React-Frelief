import React, { Component } from "react";
import Btn from "../../components/Button";

export default class Home extends Component {
  render() {
    return (
    <div id="content">
      <p>FREE DISASTER RELIEF RESOURCES</p>
      <a href="/search"><Btn>SEARCH</Btn></a>
      <a href="/resource"><Btn>OFFER RESOURCES</Btn></a>
      <a href="/resource/map"><Btn>Map</Btn></a>
      <p id="copywrite">FREILIEF © 2018</p> 
    </div>
    );
  }
}