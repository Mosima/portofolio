import React from 'react'
import YouTube from 'react-youtube'

import arduino from '../images/arduino.png'
import raspi from "../images/raspi.png"
import shot1 from '../images/IMG-20190405-WA0036.jpg'

class Contact extends React.Component {
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

  render() {
    const opts = {
      height: '390',
      width: '550',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
     
        <div>
            <h2 className="major">Projects</h2>
          {/* <span className="image main"><img src={pic03} alt="" /></span> */}
          
            <div className="video" style={{alignSelf:'center'}}>
            <YouTube
              videoId="S-HXFUXw_1o"
              opts={opts}
              onReady={this._onReady}
          />
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
        </div>
      
    )
  }
}

export default Contact
