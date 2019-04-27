import React from 'react'
import YouTube from 'react-youtube'

import arduino from '../images/arduino.png'
import raspi from "../images/raspi.png"
import shot1 from '../images/IMG-20190405-WA0036.jpg'



class Contact extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        windowWidth: '0px'
      }
    }

  componentWillMount(){
    const windowGlobal = typeof window !== 'undefined' && window
    
    if(window.innerWidth > 1678){
      this.setState({windowWidth: '750px'});
    }
    if(window.innerWidth > 600 && window.innerWidth <= 1678){
      this.setState({windowWidth: '550px'});
    }
    if(window.innerWidth <= 600){
      this.setState({windowWidth: '450px'});
    }
    if(window.innerWidth <= 414){
      this.setState({windowWidth: '325px'});
    }
  }

    _onReady(event) {
        
        event.target.pauseVideo();
    }

  render() {
    const opts = {
      // height: '390',
       width: this.state.windowWidth + 'px',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    console.log('width',this.state.windowWidth)
    return (
     
        <div>
            <h2 className="major">Projects</h2>
          {/* <span className="image main"><img src={pic03} alt="" /></span> */}
          
            <div className="video" style={{alignSelf:'inherit'}}>
            <YouTube
              videoId="S-HXFUXw_1o"
              opts={opts}
              onReady={this._onReady}
          />
          </div>
          <p>The above video is a prototype of a moving solar geyser, the moves are determined by the density of sun. As the density of the light changes the sensors gather sunlight data for calculations to compare the previous captured density with the current one, if the current density is greater than the previous one the geyser will move towards the current density and the process keep going. It’s an IoT project because it shows the end user the water level and the temperature of the water contained by the geyser. If the geyser is empty it will refill the geyser automatically. 
          </p>
          <p>
          As I have mentioned it's an IoT project, the temperature and water level of the water will be shown live through socket on the Android and progressive web applications. The following shots will show it:
          </p>
          <img src={shot1} alt="" style={{width: '250px', paddingLeft: '10px'}}/>
          <h3>Boards</h3>
          
          <img src={raspi} alt="" style={{width: '180px', paddingLeft: '10px'}}/>
          {"  "}Raspberry Pi 3B
          <img src={arduino} alt="" style={{width: '180px', paddingLeft: '10px'}}/>
          {"  "}Arduino
          
        </div>
      
    )
  }
}

export default Contact
