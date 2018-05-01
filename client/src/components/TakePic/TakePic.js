import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
 
class TakePic extends Component {
  onCameraError (error) {
    let {code, message, name} = error;
    let strError = `Camera Error: code: ${code} message: ${message} name: ${name}`;
    console.error(strError);
  }
 
  onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto');
  }
 
  render () {
    return (
      <div className="App">
        <Camera
          onCameraError = {this.onCameraError}
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
        />
      </div>
    );
  }
}
 
export default TakePic;