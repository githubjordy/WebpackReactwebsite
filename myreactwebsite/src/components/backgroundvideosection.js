import React from 'react'
import "../components/backgroundvideosection.css"
import bcgroundvideo from "../images/video-2.mp4"

export default function backgroundvideosection(){

    return(
        <div className='backgroundvideo-wrapper'>

        <video loop autoPlay muted id="myVideo" >
        <source          
          src={bcgroundvideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

        <div className="content">
        <h1>Heading</h1>
        <p className='backgroundvideo-p'>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>
        <button id="myBtn" >Learn More</button>
        </div>

        </div>
    )
}