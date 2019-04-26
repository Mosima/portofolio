import React from 'react'
import pic01 from '../images/pic01.jpg'

class Intro extends React.Component {

  render() {
    return (
     
        <div>
            <h2 className="major">Intro</h2>
            <span className="image main"><img src={pic01} alt="" /></span>
            <p>I'm from South Africa Limpopo Venda in a village called Muduluni, I to school and completed my matric at Kutama Secondary School during the year 2013.</p>
            <p>I then went to tertiary at Tshwane University of Technology registered under National Diploma of: Computer Systems Engineering. Through the course I have learned about many concepts which focus on Programming, Networks, Electronics and Digital Systems, System Analysis, Software Engineering and Databases. I love to hang out with friends and family, I watch Sci-Fi and Comedy movies, go to the park to refresh my mind and play games. Check out my <a href="https://www.youtube.com/watch?v=S-HXFUXw_1o">awesome work</a>.</p>
        </div>
      
    )
  }
}

export default Intro
