import React from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'

//import Tabs from './Tabs'
//pics
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import mongo from '../images/mongo2.png'
import html5 from '../images/html5.png'
import react from '../images/react.png'
import js from '../images/js.png'
import node from '../images/nodejs.png'
import css from '../images/css black.png'
import all from '../images/all.png'
import sql from '../images/mysql.png'
import graphqlPic from '../images/graphql.png'
import git from '../images/git.png'
import type from '../images/type.png'
import arduino from '../images/arduino.png'
import raspi from "../images/raspi.png"
import shot1 from '../images/IMG-20190405-WA0036.jpg'

class Main extends React.Component {

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
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>I'm from South Africa Limpopop Venda in a village called Muduluni, I to school and completed my matric at Kutama Secondary School during the year 2013.</p>
          <p>I then went to tertiary at Tshwane University of Technology registered under National Diploma of: Computer Systems Engineering. Through the course I have learned about many concepts which focus on Programming, Networks, Electronics and Digital Systems, System Analysis, Software Engineering and Databases. I love to hang out with friends and family, I watch Sci-Fi and Comedy movies, go to the park to refresh my mind and play games. Check out my <a href="https://www.youtube.com/watch?v=S-HXFUXw_1o">awesome work</a>.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>I am a junior developer, I have gained my 2-3 years experience at ITTHYNK SMART SOLUTIONS where I was a software developer working on software development. I developed web and mobile applications using various technologies and of course their backend, being said that it's safe to say I am a junior Fullstack developer.</p>
          <p>My work:</p>
          <p>  •	Exposing interns to MERN Stack development (MongoDB, Express, React and Nodejs).
              <br/>•	Writing and implementing efficient code.
              <br/>•	Testing and evaluating programs.
              <br/>•	Working closely with other developers, UX designers, and business analysts.
              <br/>•	Researching, designing, implementing and managing software programs.
              <br/>•	Deploying applications.
              <br/>•	Identifying areas for modification in existing programs and developing these modifications.
              <br/>•	Developing quality assurance procedures using Agile methodology.
              <br/>•	Create and document software tools required by other developers
              <br/>•	Work independently and groups when required.
              <br/>•	Being in lookout for new technologies 
              <br/>•	Continuously learning and improve skills.
              </p>
              {/* <Tabs/> */}
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>React (Redux, GraphQL)	HTML, CSS, JavaScript, jQuery
            Node JS, Agile Methodology,
            IOT, Robotics, SCSS, React Native (IOS and Android),
            Web Development, MySQL, MongoDB,
            Git, MERN Stack Developer, TypeScript.
            </p>
            <div>
              <img src={html5} alt="" style={{width: '80px', paddingLeft: '10px'}}/>
              <img src={react} alt="" style={{width: '80px', paddingLeft: '10px'}}/>
              <img src={js} alt="" style={{width: '80px', paddingLeft: '10px'}}/>
              <img src={node} alt="" style={{width: '80px', paddingLeft: '10px'}}/>
              <img src={css} alt="" style={{width: '80px', paddingLeft: '10px'}}/>
              <img src={all} alt="" style={{width: '70px', paddingLeft: '10px'}}/>
              <img src={mongo} alt="" style={{width: '80px', paddingLeft: '10px'}}/>
              <img src={graphqlPic} alt="" style={{width: '80px', paddingLeft: '10px'}}/>
              <img src={sql} alt="" style={{width: '80px', paddingLeft: '10px'}}/>
              <img src={git} alt="" style={{width: '80px', paddingLeft: '10px'}}/>
              <img src={type} alt="" style={{width: '80px', paddingLeft: '10px'}}/>
              
            </div>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'project' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
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
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.linkedin.com/in/godfrey-thabulwa-1713a8b1" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/Mosima" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main