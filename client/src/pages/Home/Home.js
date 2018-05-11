import React, { Component } from "react";
import Btn from "../../components/Button";
import logo from "./logo.png"

export default class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img src={logo}/>
        <p style={styles.head}>FRELIEF</p>
        <a href="/search"><Btn style={styles.button}>Search</Btn></a>
        <a href="/resource"><Btn style={styles.button}>Offer Resources</Btn></a>
        <a href="/map"><Btn style={styles.button}>Map</Btn></a>
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
    width: "400px",
    height: "600px",
    background: "#0D1E30"
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
  }
}