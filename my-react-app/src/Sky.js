import React, { Component } from 'react';
import './App.css';
import sky from './img/sky_big.jpg'

class Sky extends Component {
  render() {
    return (
      <img src={sky} className="skybackground" />
    );
  }
}

export default Sky
