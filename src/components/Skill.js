import React from 'react'

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
import pic03 from '../images/pic03.jpg'

class Skill extends React.Component {

  render() {
    return (
     
        <div>
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
        </div>
      
    )
  }
}

export default Skill
