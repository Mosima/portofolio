import React from 'react'
import Tabs from './Tabs'
import pic02 from '../images/pic02.jpg'

class Work extends React.Component {

  render() {
    return (
     
        <div>
            <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <Tabs/>  
        </div>
      
    )
  }
}

export default Work
