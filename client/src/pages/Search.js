import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";

class Search extends Component {
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
  }

  loadResources = () => {
    API.getResource()
      .then(res =>
        this.setState({ Resources: res.data, })
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
      <div style={styles.container}>
        <p style={styles.head}>Resources</p>
          {this.state.Resources.length ? (
            <List>
              {this.state.Resources.map(resource => (
                <ListItem key={resource._id}>
                  <Link to={"/resource/" + resource._id}>
                    <strong>
                      {resource.name} by {resource.address}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => this.deleteResource(resource._id)} />
                </ListItem>
              ))}
            </List>
            ) : (
          <h3>No Results to Display</h3>
        )}
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
  }
}

export default Search;
