import React, { Component } from 'react';
import door from './img/door_begin.svg'
import cdoor from './img/crack_door.svg'
import star from './img/stars_begin.svg'
import A from './img/A.svg'
import B from './img/B.svg'
import C from './img/C.svg'
import D from './img/D.svg'
import E from './img/E.svg'
import './App.css';
import './csshake.min.css';
import Menu from './Menu'
import Sky from './Sky'

function Begintext(props){
  const begin_text = (
    <div className="begintext">
      <p>I am Jennifer Ziyuan Huang 黄梓原 <br/> => (designer + coder) <br/><br/>  Click on the door to see my works! </p>
    </div>
  )
  if (!props.showtext){
    return null
  }
  return(
    <div>
      {begin_text}
      <p className="noMobile"> The mobile view is still being developed! Please use a desktop computer for viewing my portfolio! </p>
    </div>
  )
}

function Begindoor(props){
  const door_star = (
    <div className="doorstarbox" id="doorstar">
      <img src={star} className="star"/>
      <img src={props.showcrack ? cdoor : door} className="door shake"/>
    </div>
  )
  return(
    <div>
      {door_star}
    </div>
  )
}

class Doorpieces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {animate: false};
    this.pieces = [A, B, C, D, E]
    this.pieces_height = [23.8, 44.1, 64, 52.5, 40] //in mm
    this.whole_height = 79.3
    this.pieces_left = [25, 80, 50, 25, 75] //in vw
    this.pieces_top = [25, 25, 46, 75, 75] //in vh
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
    { this.pieces.map((piece, index) =>
      <img key={piece} src={piece} className="piecesProgress"
      style={{
        height: this.pieces_height[index]/this.whole_height*40 + 'vh',
        left: this.pieces_left[index]+ 'vw',
        // left: this.state.animate ? this.pieces_left[index] + 100 + 'vw' : this.pieces_left[index] + 'vw',
        top: this.state.animate ? this.pieces_top[index] + 1200 + 'vh' : this.pieces_top[index] + 'vh',
        transform: 'translate(-50%,-50%)',
        position: 'fixed',
        transition: 'all 50s',
        zIndex:'5'
    }} />) }
    </div>
  );
  }
}

class Opening extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stage:0};
    //stage 0: showtext/ showdoor / !showcrack
    //stage 1: !showtext/ showdoor / showcrack
    //stage 2: render door pieces

    // This binding is necessary to make `this` work in the callback
    this.doorClicked = this.doorClicked.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.render(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  doorClicked() {
    this.setState({
      stage: 1
    });

    setTimeout(function(){
      this.setState({stage:2});
    }.bind(this),500);

    setTimeout(function(){
      this.setState({stage:3});
    }.bind(this),5000);
  }


  render() {
    if (this.state.stage <= 1){
      return (
        <div>
          <Begintext showtext={this.state.stage == 0}/>
          <a onClick={this.doorClicked}>
            <Begindoor showcrack={this.state.stage == 1}/>
          </a>
        </div>
      );
    }
    if (this.state.stage == 2) {
      return(
      <div>
        <Doorpieces />
        <Sky />
      </div>
    );
  }
    if (this.state.stage == 3) {
      return(
      <div>
        <Sky />
        <Menu />
      </div>
    );
    }

    return null
  }
}

export default Opening
