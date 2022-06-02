import React from 'react'

function Contact() {
  return (
      <div className="form">
              <h1>Contact Me</h1>
      <form>
          <label>Your Name</label>
          <input type="text"></input>
          <label>Email Address</label>
          <input type="email"></input>
          <label>Subject</label>
          <input type="text"></input>
          <label>Message</label>
          <textarea rows="6" placeholder="Enter your message here"/>
          <button className="submitBtn">Submit</button>
      </form>
  </div>
)
}
export default Contact