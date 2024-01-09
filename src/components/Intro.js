import React from 'react'
import pic01 from '../images/pic01.jpg'

class Intro extends React.Component {

  render() {
    return (
     
        <div>
            <h2 className="major">Intro</h2>
            <span className="image main"><img src={pic01} alt="" /></span>
            <p>I'm based in South Africa, Midrand and currently working at one odf the biggest banks in Africa.</p>
            <p>I attended tertiary at Tshwane University of Technology registered under National Diploma of: Computer Systems Engineering. Through the course I have learned about many concepts which focus on Programming, Networks, Electronics and Digital Systems, System Analysis, Software Engineering, Data Science and Databases. I love to hang out with friends and family, I watch anime (mostly Japanese), Sci-Fi and Comedy movies, and play games. Check out my <a className='tube-link' href="https://www.youtube.com/watch?v=S-HXFUXw_1o">awesome work</a>.</p>
        </div>
      
    )
  }
}

export default Intro
