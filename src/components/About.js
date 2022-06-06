import React from 'react'
import capture from '../Capture.JPG'

function About() {
  return (
    <div className="container" id="aboutMe">
      <h1><strong>Kristina V. Pang</strong></h1>
      <img className="rounded-circle capture" src={capture} id="capture"/>
      <div className="container" id="about">
<p>Currently attending the University of Washington Coding Bootcamp (Graduating June 2022).
  <br/>I have been in the real estate and finance industry the last 6 years - from legal assisting, transaction coordinating, to loan closing. Through my professional career, I have most enjoyed analytics, problem-solving, and detail-oriented processes. 
I am seeking employment long-term as a front-end developer, where I believe my skillset will be best suited and personally fulfilling while continuing to gain experience, and further develop my skills.</p>
     <p><strong>I am knowledgable with the following technologies:</strong></p>
     <p>HTML</p>
     <p>CSS</p>
     <p>JavaScript</p>
     <p>React</p>
     <p>SQL</p>
     <p>NoSQL</p>
     <p>MongoDB</p>
      </div></div>
)
}
export default About