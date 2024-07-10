import React from 'react'
import { NavLink } from 'react-router-dom';
import './Contact.css'

export const Contact = () => {
  return (
    <div className='contact-box'>
      <h2> You can contact me in various ways:</h2>
      <NavLink className="contact-link" to="https://calendly.com/stamatismat" target="_blank">Schedule a meeting on Calendly</NavLink>
      <NavLink className="contact-link" to="mailto:stamatis_mat@hotmail.com" target="_blank">Send me an email</NavLink>
      <NavLink className="contact-link" to="https://www.linkedin.com/in/stamatis-matziounis/" target="_blank">Connect on LinkedIn</NavLink>
    </div>
  )
}


export default Contact;