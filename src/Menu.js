import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './App.css';
import './csshake.min.css';
import handlight from './img/hand_light.svg'
import './grid12.css'
import arm from './img/arm-a.png'
import larynx from './img/larynxfront.png'
import wolflogo from './img/gamewolf.png'
import hungrysnake from './img/hungrysnake.png'
import rafting from './img/rafting.png'
import whale from './img/whale.png'

import tfreflect from './img/25_reflect.gif'
import tfrecord from './img/25_record.png'
import tftimer from './img/25_timer.gif'
import tfwrite from './img/25_write.gif'
import tf from './img/25.png'

import armhead from './img/arm_head.gif'

import skateboard from './img/skateboard.svg'
import arrow from './img/arrow.svg'

import pbp1 from './img/psyber-p1.JPG'
import pbp2 from './img/psyber-p2.jpg'

import microscope from './img/microscope.JPG'
import mcp1 from './img/microscope-p1.JPG'
import mcp2 from './img/microscope-p2.JPG'
import mcp3 from './img/microscope-p3.jpg'

import train from './img/gazelle_train.jpg'
import bob from './img/thegazelle_bobdylan.jpg'
import painting_cover from './img/painting_cover.JPG'

import painting6 from './img/painting/bobby.JPG'
import painting1 from './img/painting/kid.JPG'
import painting2 from './img/painting/mystuff.JPG'
import painting5 from './img/painting/pots.JPG'
import painting3 from './img/painting/seaurchin.JPG'
import painting4 from './img/painting/wechat.JPG'

import BLUR from './img/blur.jpg'

import threed from './img/3Dcover.JPG'

import threed1 from './img/3D/elephant.JPG'
import threed2 from './img/3D/flag1.JPG'
import threed3 from './img/3D/flag2.JPG'
import threed4 from './img/3D/fountain1.JPG'
import threed5 from './img/3D/fountain2.JPG'
import threed6 from './img/3D/fountain3.JPG'

import iconcover from './img/iconcover.png'

import icon1 from './img/icon/hackad1.png'
import icon2 from './img/icon/solar.png'
import icon3 from './img/icon/sticker.png'
import icon4 from './img/icon/page1.png'
import icon5 from './img/icon/page2.png'

import About from './About'

// import ProgressiveImage from 'react-progressive-bg-image';

import telerobot from './img/telerobot.JPG'
import telearm from './img/telephonearm.JPG'

import uforobot from './img/uforobot.JPG'
import ufo1 from './img/ufo1.JPG'
import ufo2 from './img/ufo2.JPG'
import ufo3 from './img/ufo3.JPG'

import ProgressiveImage from "react-progressive-image-loading";

class Oneproject extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clickFunction(this.props.title)
  }

  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <img
          src={this.props.img}
          className="projectimage"
          onClick={this.handleClick}
        />
        <p className="menutext" style={{marginTop:'3px', fontSize:'11pt'}}>{this.props.title}</p>
      </div>
    )
  }
}

class Displaying extends React.Component{
  render(){
    switch (this.props.projectname) {
      case "Larynx":
        return(
          <div>
            <h1>Larynx</h1>
            <h3>Interactive Installation</h3>

            <div className="videoWrapper">
              <YouTube videoId="mOXRksrrKX0"/>
            </div>
            <p className="projecttext" style={{left:'10%', width:'80%',position:'absolute'}}>Larynx is an interective installation that visualizes human's voice. As a person speaks to the microphone, a string attached to a motor generates a wave that reflects the frequency of human's voice. This piece of work was shortlisted for The Sheikha Manal Young Artist Award 2016, and exhibited in Dubai. <br /> Larynx is supported with Raspberry Pi and the sound analysis is carried out by Python.<br/>I worked with Dylan Crow on this project.<br/><br/><br/><br/></p>
          </div>
        )
      case "Hungry Snake":
        return(
          <div>
            <h1>Hungry Snake</h1>
            <h3>Interactive Kinetic Sculpture</h3>
            <div className="videoWrapper">
              <YouTube videoId="wIFDw-clDmI"/>
            </div>
            <p className="projecttext" style={{left:'10%', width:'80%',position:'absolute'}}>The hungry snake moves to wherever the icecream is. Users can use a keyboard to move the icecream in front of the snake. wherever the icecream goes, the snake moves to.<br/>
            This piece was built at the Kinetic Sculpture Workshop hosted by Felix Beck and FELD studio Berlin. We wanted to create a piece that could be cute and interactive that even children can enjoy.
            <br/>I worked with Koh Terai on this project.<br/><br/><br/><br/></p>
          </div>
        )

        case "Telephone Robot":
          return(
            <div>
              <h1>Telephone Robot</h1>
              <h3>Performing Robot</h3>
              <div className="videoWrapper">
                <YouTube videoId="JRVY-cMyqN8"/>
              </div>
              <img src={telearm} style={{position:'relative',width:'100%',left:'0'}}/>
              <p className="projecttext" style={{left:'10%', width:'80%',position:'absolute'}}>This is a robot that I made for the class Performing Robots. In the end of semester show,
              we had a robot theater performance and the robots are the actors of the plays. This robot performed in a play "Call Overflow."
              In the story, the robot answers telephone calls regarding programming questions. He starts getting tired of his job as a telephone robot.
              At the moment, he receives a life-changing phone call... This video is a demo of how the robot looks like. Video from the performance will be uploaded soon!
              <br/><br/><br/><br/></p>
            </div>
          )

          case "UFO Robot":
            return(
              <div>
                <h1>UFO Robot</h1>
                <h3>Laser Cut Robot Design</h3>
                <div className="videoWrapper">
                  <YouTube videoId="MDy8Y2o8cjQ"/>
                </div>
                <img src={ufo1} style={{position:'relative',width:'100%',left:'0'}}/>
                <img src={ufo2} style={{position:'relative',width:'100%',left:'0'}}/>
                <img src={ufo3} style={{position:'relative',width:'100%',left:'0'}}/>
                <p className="projecttext" style={{left:'10%', width:'80%',position:'absolute'}}>
                I wanted to design a robot with structure that holds a smartphone and the smartphone screen becomes a part of the robot. The structure turns out to look like a small UFO.
                I used P5.js for creating the eye. There are a lot more possibilities can be explored. Moreover, gyroscope and accelerometer sensors inside the smartphone can be used to detect the motion of the robot and interact with the graphics showing on the screen.
                <br/><br/><br/><br/></p>
              </div>
            )
        case "Consciousness":
          return(
            <div>
              <h1>Consciousness</h1>
              <h3>Virtual Reality Rafting Game</h3>
              <div className="videoWrapper">
                <YouTube videoId="ipm-BBCupm0"/>
              </div>
              <p className="projecttext" style={{left:'10%', width:'80%',position:'absolute'}}>Consciousness is our final project for Alternate Realities class at NYU Abu Dhabi. At first we wanted to create a mindful rafting experience. As the game developed, we added the storyline of rafting inside consciousness of someone in a trauma.
              The game is built on HTC Vive.
              <br/>I worked with Batu Aytemiz and Sugandha Shukla on this project.<br/><br/><br/><br/></p>
            </div>
          )
        case "Psyber Threat":
          return(
            <div>
              <h1>Psyber Threat</h1>
              <h3>Cyber Security Boardgame</h3>
              <div className="videoWrapper">
                <YouTube videoId="yEQl1UzyXLU"/>
              </div>
              <img src={pbp1} style={{position:'relative',width:'100%',left:'0'}}/>
              <img src={pbp2} style={{position:'relative',width:'100%',left:'0'}}/>
              <p className="projecttext" style={{left:'10%', width:'80%', position:'absolute'}}>Psyber Threat is a board game that aims at educating players on cyber security concepts. I designed the game in the Center for Cyber Security at NYU Tandon. Through this game, players can learn cyber security concepts such as Virus, Firewall and Distributed Denial of Service.
              Download the game from <a href="https://github.com/Hoyiki/PsyberThreat/tree/master" target="_blank" style={{color:'red'}}>here</a>!
              <br/><br/><br/><br/></p>
            </div>
          )

          case "DIY Microscope":
            return(
              <div>
                <h1>DIY Microscope</h1>
                <h3>Laser Cut Design</h3>
                <img src={mcp1} style={{position:'relative',width:'100%',left:'0'}}/>
                <img src={mcp2} style={{position:'relative',width:'100%',left:'0'}}/>
                <img src={mcp3} style={{position:'relative',width:'100%',left:'0'}}/>
                <p className="projecttext" style={{left:'10%', width:'80%', position:'absolute'}}>Magically, if you take a webcam apart and flip the lens, the webcam will become a microscope. A precise distance is needed to achive the focus. I designed a laser cut template for DIY microscope.
                This project is built in Lab for Narrative Technologies and Spatial Installations at NYU Abu Dhabi.
                <br/><br/><br/><br/></p>
              </div>
            )

        case "Twenty Five":
          return(
            <div>
              <h1>25</h1>
              <h3>Time Management Application</h3>
              <div className="row"><img src={tf} /></div>
              <p><br/></p>
              <div className="row"><img src={tfwrite} /></div>
              <p><br/></p>
              <div className="row"><img src={tftimer} /></div>
              <p><br/></p>
              <div className="row"><img src={tfreflect} /></div>
              <p><br/></p>
              <div className="row"><img src={tfrecord} /></div>
              <p className="projecttext" style={{left:'10%', width:'80%',position:'absolute'}}>I find myself easily get distracted when I work on my computer. So I build this menu-bar desktop application to help me to stay focused when I work.<br/>
              I think it's helpful to write down a very specific and small task that I want to focus in the next 25 minutes on before working. After 25 minutes, the app will inform me that time is over. If I want to keep on working for a while, the timer is still counting the time that I'm spending on this task. When I finish, I can go back to the app and shortly summerize what I have done based on my plan. <br/>
              All the record will be saved. I can check from the app and see how I spent my time.<br/>
              This project is built with Electron. It will be launched soon.<br/><br/><br/><br/></p>
            </div>
          )
          case "Assistive Robotic Arm":
            return(
              <div>
                <h1>Assistive Robotic Arm</h1>
                <h3>Assistive Techology Research</h3>

                <div className="videoWrapper">
                  <YouTube videoId="xnJi3J5FeW8"/>
                </div>

                <p><br/></p>

                <p className="projecttext" style={{left:'10%', width:'80%',position:'absolute'}}>This is a project for Undergraduate Summer Research at NYU Shanghai. We are trying to explore the possility to use a robotic arm as an assistive technology for disabled people.<br/>
                The first part of this project is to use head movement to control the robotics arm rotation. We used a fixed camera to track the movement of someone&rsquo;s head, and then map the movement to robotic arm.<br/>
                And the second part of this project that we worked on is to enable the arm to automatically detect an object and grab it. A camera is fixed to the top of the arm. We used OpenCV to detect the position of an object. Then the arm moves to center the object and strectches to grab the object. But this part didn&rsquo;t work out very well by the end of the summer. Our arm structure had a very limited degree of freedom in terms of stretching.<br/>
                I worked with Sevi Reyes, David Santiano and Nicholas Sanchez on this project.
                <br/><br/><br/><br/></p>
              </div>
            )
            case "Illustration":
              return(
                <div>
                  <h1>Illustration</h1>
                  <div className="row">
                    <a href="https://www.thegazelle.org/issue/98/commentary/train-travel" target="_blank">
                      <img src="https://thegazelle.s3.amazonaws.com/gazelle/2016/02/thegazelle_crowdedTrain.jpg"  style={{position:'relative',width:'100%',left:'0'}} />
                    </a>
                  </div>
                  <div className="row">
                    <a href="https://www.thegazelle.org/issue/92/off-campus/vpn-update" target="_blank">
                      <img src="https://thegazelle.s3.amazonaws.com/gazelle/2016/02/vpn-jennifer-huang.jpg"  style={{position:'relative',width:'100%',left:'0'}} />
                    </a>
                  </div>
                  <div className="row">
                    <a href="https://www.thegazelle.org/issue/94/commentary/hannah-3" target="_blank">
                      <img src="https://thegazelle.s3.amazonaws.com/gazelle/2016/02/Features_HannahTaylorEssay_JenniferHuang.jpg"  style={{position:'relative',width:'100%',left:'0'}} />
                    </a>
                  </div>
                  <div className="row">
                    <a href="https://www.thegazelle.org/issue/96/commentary/counterfeit-obsession" target="_blank">
                      <img src="https://thegazelle.s3.amazonaws.com/gazelle/2016/02/opinion-_-counterfeit-_-jennifer-huang.jpg"  style={{position:'relative',width:'100%',left:'0'}} />
                    </a>
                  </div>
                  <div className="row">
                    <a href="https://www.thegazelle.org/issue/97/in-focus/counceling-psychologist" target="_blank">
                      <img src="https://thegazelle.s3.amazonaws.com/gazelle/2016/02/thegazelle_psychology.jpg"  style={{position:'relative',width:'100%',left:'0'}} />
                    </a>
                  </div>
                  <div className="row">
                    <a href="https://www.thegazelle.org/issue/116/features/entrepreneurship-at-nyuad" target="_blank">
                      <img src="https://s3.amazonaws.com/thegazelle/gazelle/2017/09/student-entrepeneurship_Jennifer-Huang.jpg"  style={{position:'relative',width:'100%',left:'0'}} />
                    </a>
                  </div>
                  <div className="row">
                    <a href="https://www.thegazelle.org/issue/93/commentary/cynicism" target="_blank">
                      <img src="https://thegazelle.s3.amazonaws.com/gazelle/2016/02/thegazelle_cynical.jpg"  style={{position:'relative',width:'100%',left:'0'}} />
                    </a>
                  </div>
                  <div className="row">
                    <a href="https://www.thegazelle.org/issue/107/commentary/response-to-the-reading-group" target="_blank">
                      <img src="https://thegazelle.s3.amazonaws.com/gazelle/2016/02/Opinion_ResponsetoReadingGroup_Jennifer.jpg"  style={{position:'relative',width:'100%',left:'0'}} />
                    </a>
                  </div>
                  <div className="row">
                      <img src={bob}  style={{position:'relative',width:'100%',left:'0'}} />
                  </div>
                  <p><br/></p>
                </div>
              )

              case "Painting":
                return(
                  <div>
                    <h1>Painting</h1>
                      <div className="row">
                          <img src={painting1}  style={{position:'relative',width:'75%',left:'0'}} />
                      </div>
                      <div className="row">
                          <img src={painting2}  style={{position:'relative',width:'75%',left:'0'}} />
                      </div>
                      <div className="row">
                          <img src={painting3}  style={{position:'relative',width:'40%',left:'0'}} />
                      </div>
                      <div className="row">
                          <img src={painting4}  style={{position:'relative',width:'40%',left:'0'}} />
                      </div>

                    <p><br/></p>
                  </div>
                )
                case "3D":
                  return(
                    <div>
                      <h1>3D</h1>
                        <div className="row">
                            <img src={threed2}  style={{position:'relative',width:'75%',left:'0'}} />
                        </div>
                        <div className="row">
                            <img src={threed3}  style={{position:'relative',width:'75%',left:'0'}} />
                        </div>
                        <div className="row">
                            <img src={threed1}  style={{position:'relative',width:'75%',left:'0'}} />
                        </div>
                        <div className="row">
                            <img src={threed4}  style={{position:'relative',width:'75%',left:'0'}} />
                        </div>
                        <div className="row">
                            <img src={threed5}  style={{position:'relative',width:'75%',left:'0'}} />
                        </div>
                        <div className="row">
                            <img src={threed6}  style={{position:'relative',width:'75%',left:'0'}} />
                        </div>
                      <p><br/></p>
                    </div>
                  )
                  case "Icon Design":
                    return(
                      <div>
                        <h1>Icon Design</h1>
                          <div className="row">
                              <img src={icon2}  style={{position:'relative',width:'75%',left:'0'}} />
                          </div>
                          <p><br/></p>
                          <div className="row">
                              <img src={icon3}  style={{position:'relative',width:'70%',left:'0'}} />
                          </div>
                          <p><br/></p>
                          <div className="row">
                              <img src={icon4}  style={{position:'relative',width:'60%',left:'0'}} />
                          </div>
                          <p><br/></p>
                          <div className="row">
                              <img src={icon5}  style={{position:'relative',width:'60%',left:'0'}} />
                          </div>
                          <p><br/></p>
                          <div className="row">
                              <img src={icon1}  style={{position:'relative',width:'60%',left:'0'}} />
                          </div>
                        <p><br/></p>
                      </div>
                    )
      default:
        return null
    }
  }
}

class Listcontent extends React.Component {
  render() {
    switch (this.props.index) {
      case 1:
        return(
          <div className="row">
            <Oneproject img={larynx} title={"Larynx"} clickFunction={this.props.clickFunction}/>
            <Oneproject img={hungrysnake} title={"Hungry Snake"} clickFunction={this.props.clickFunction}/>
            <Oneproject img={arm} title={"Assistive Robotic Arm"} clickFunction={this.props.clickFunction}/>
            <Oneproject img={microscope} title={"DIY Microscope"} clickFunction={this.props.clickFunction}/>
            <Oneproject img={telerobot} title={"Telephone Robot"} clickFunction={this.props.clickFunction}/>
            <Oneproject img={uforobot} title={"UFO Robot"} clickFunction={this.props.clickFunction}/>
          </div>
        )
      case 0:
        return(
          <div>
            <About />
          </div>
        )

      case 2:
        return(
          <div className="row">

            <Oneproject img={wolflogo} title={"Psyber Threat"} clickFunction={this.props.clickFunction}/>
            <Oneproject img={rafting} title={"Consciousness"} clickFunction={this.props.clickFunction}/>
            <Oneproject img={whale} title={"Twenty Five"} clickFunction={this.props.clickFunction}/>

          </div>
        )

      case 3:
          return(
            <div className="row">

              <Oneproject img={train} title={"Illustration"} clickFunction={this.props.clickFunction}/>
              <Oneproject img={painting_cover} title={"Painting"} clickFunction={this.props.clickFunction}/>
              <Oneproject img={threed} title={"3D"} clickFunction={this.props.clickFunction}/>
              <Oneproject img={iconcover} title={"Icon Design"} clickFunction={this.props.clickFunction}/>

            </div>
          )

      default:
        return(
          null
        )
    }
  }
}


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clickedIndex:1, shifting:false, displayingProject: "Larynx", skating:false};
    this.buttons = ["About", "Physical","Digital", "Visual"]
    this.clickedMethod = [this.aboutClicked, this.physicalClicked, this.digitalClicked, this.visualClicked]
    this.top = [0,25,50,75]
    this.projectClicked = this.projectClicked.bind(this)
  }

  componentDidMount() {
    // this.timerID = setInterval(
    //   () => this.render(),
    //   1000
    // );
  }

  componentWillUnmount() {
    // clearInterval(this.timerID)
  }

  projectClicked(name){
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({shifting: true, displayingProject:name});
      });
    });
    this.setState({skating: true});
    setTimeout(function() {
        this.setState({skating: false})
    }.bind(this), 1500);
  }

  aboutClicked(){
    this.setState({
      clickedIndex: 0
    });
    setTimeout(function() {
        window.scrollTo(0,0);
    }.bind(this), 10);
  }
  physicalClicked(){
    this.setState({
      clickedIndex: 1
    });
    setTimeout(function() {
        window.scrollTo(0,0);
    }.bind(this), 10);
  }
  digitalClicked(){
    this.setState({
      clickedIndex: 2
    });
    setTimeout(function() {
        window.scrollTo(0,0);
    }.bind(this), 10);
  }
  visualClicked(){
    this.setState({
      clickedIndex: 3
    });
    setTimeout(function() {
        window.scrollTo(0,0);
    }.bind(this), 10);
  }


  shiftBack(){
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({shifting: false});
      });
    });
    this.setState({skating: true});
    setTimeout(function() {
        this.setState({skating: false})
    }.bind(this), 1500);
    this.setState({skating: true});
    setTimeout(function() {
        window.scrollTo(0,0);
    }.bind(this), 500);
  }

  render() {

    return (
      <div>

        <div className = "wholemenu" style={{
          transition: 'all 1s',
          transitionTimingFunction: "ease-in-out",
          position: 'absolute',
          left: (this.state.shifting)? '-100%':'0%'
        }}>

          <div className="menucontainer" style={{

          transform: (this.state.shifting)? 'translateX(-100vw)':'translateX(0vw)',
          transition: 'all 1s',
          transitionTimingFunction: "ease-in-out",
          backgroundColor: 'black'
        }}>

            { this.buttons.map((buttontext, index) =>
              <a key={index} className="menutext shake" onClick={this.clickedMethod[index].bind(this)}
              style={{

                top: this.top[index] + '%',
                left: '0',
                position: 'absolute',
                color: 'white',
                borderWidth: (index == this.state.clickedIndex) ? '2px': '0px',
                borderColor: 'red',
                borderStyle:'dashed',

            }}>
            {buttontext}
            </a> )}

            <img src={handlight} className="lefttophandlight"/>
          </div>

          <div className= {(0 != this.state.clickedIndex) ? 'listcontainer': ''} style={{zIndex:'3'}}>
            <Listcontent index={this.state.clickedIndex} clickFunction={this.projectClicked}/>
          </div>
        </div>



        <div className = "wholemenu" style={{
          width:"100vw",
          height:"100vh",
          transition: 'all 1s',
          transitionTimingFunction: "ease-in-out",
          left: (this.state.shifting)? '0%':'100%'
        }}>
          <div className='projectcontainer' >
              <Displaying projectname={this.state.displayingProject} />
          </div>
        </div>

        <img src={arrow} className="backarrow" style={{
          left: (this.state.shifting)? '1%':'101%',
          transition: 'all 1s',
          transitionTimingFunction: "ease-in-out"
        }} onClick={this.shiftBack.bind(this)}/>

        <img src={skateboard} style={{
          height: '30vh',
          left: '100vw',
          top:'100vh',
          transform: 'translate(-50%,-100%)',
          left: (this.state.shifting)? '0%':'100%',
          transition: 'all 1s',
          transitionTimingFunction: "ease-in-out",
          position:'fixed',
          display:(this.state.skating)? 'block':'none'
        }} />
      </div>

  );
  }
}

export default Menu
