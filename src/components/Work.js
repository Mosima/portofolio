import React from 'react'
import pic02 from '../images/pic02.jpg'

class Work extends React.Component {

  render() {
    return (
     
        <div>
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
        </div>
      
    )
  }
}

export default Work
