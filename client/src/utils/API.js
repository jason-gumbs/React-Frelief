import axios from "axios";

export default {
  // Gets all books
  getResource: function() {
    return axios.get("/api/resource");
  },
  // Gets the book with the given id
  getResourcebyId: function(id) {
    return axios.get("/api/resource/" + id);
  },
  // Deletes the book with the given id
  deleteResource: function(id) {
    return axios.delete("/api/resource/" + id);
  },
  // Saves a book to the database
  saveResource: function(resourceData) {
    console.log(resourceData)
    return axios.post("/api/resource", resourceData);
  }
};
