import React, { Component } from 'react';
import './App.css';
import handlight from './img/hand_light.svg'

class Hands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {animate: false};
    // this.hands = [handlight,handlight,handlight]
    // this.pieces_height = [20,30,30] //in mm
    // this.pieces_left = [0,33,66] //in vw
    // this.pieces_top = [-20,-20,-20] //in vh

    this.hands = [handlight]
    this.pieces_height = [30] //in mm
    this.pieces_left = [33] //in vw
    this.pieces_top = [-20] //in vh
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({animate: true});
      });
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
    <div>
    { this.hands.map((piece, index) =>
      <img key={piece+index} src={piece} className="piecesProgress"
      style={{
        height: this.pieces_height[index] + 'vh',
        left: this.pieces_left[index]+17+ 'vw',
        // left: this.state.animate ? this.pieces_left[index] + 100 + 'vw' : this.pieces_left[index] + 'vw',
        top: this.state.animate ? this.pieces_top[index] + 28 + 'vh' : this.pieces_top[index] + 'vh',
        transform: 'translate(-50%,-50%)',
        position: 'fixed',
        zIndex: '0'
        // transition: 'all 7s'
    }} />) }
    </div>
  );
  }
}

class Light extends React.Component {
  constructor(props) {
    super(props);
    this.state = {animate: false, width: '0', height: '0'};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({animate: true});
      });
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}

  render() {
    return (
    <div style={{overflow:'hidden', position:'fixed'}}>
      <svg width="100vw" height="100vh"  style={{zIndex: '1', position:'relative'}}>
        <polyline
        points= {this.state.width*0.3 + " "+ this.state.height*1+ " "
              + this.state.width*0.7 + " "+ this.state.height*1+ " "
              + (this.state.width*0.5+this.state.height*0.03+this.state.height*0.03) + " "+ this.state.height*0.2+ " "
              +(this.state.width*0.5+this.state.height*0.03-this.state.height*0.03) + " "+ this.state.height*0.2+ " "}
        style = {{
          stroke: 'black',
          strokeWidth: '0',
          strokeLinkcap: 'butt',
          strokeLinejoin: 'miter',
          fill: 'white',
          fillOpacity: '0.15',
          strokeOpacity: '0.8',
          position:'fixed'
      }} />
      </svg>
    </div>
  );
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {

    return (
      <div>
        <Hands />
        <Light />
        <div className="helloContainer">
          <p className="hello"> Hello! My name is Jennifer Ziyuan Huang. I am a senior studying computer science. I was born in Xiamen, China. I went to NYU Shanghai. Currently I am studying away at NYU Abu Dbabi.
          I am passionate about design. I like building things that make people happy. In Abu Dhabi, I also like training Jiu Jitsu and skateboarding to the beach.
          </p>
        </div>
      </div>
    );
}

}

export default About
