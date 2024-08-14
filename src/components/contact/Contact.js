import React from 'react'
import { NavLink } from 'react-router-dom';
import './Contact.css'
import ContactForm from './ContactForm';
export const Contact = () => {
  return (
    <div className='main-container contact-box'>
      <h2> You can contact me in various ways:</h2>
      <h4><NavLink className="contact-link" to="https://calendly.com/stamatismat" target="_blank">Schedule a meeting on Calendly</NavLink></h4>
      <h4><NavLink className="contact-link" to="mailto:stamatis_mat@hotmail.com" target="_blank">Send me an email</NavLink></h4>
      <h4><NavLink className="contact-link" to="https://www.linkedin.com/in/stamatis-matziounis/" target="_blank">Connect on LinkedIn</NavLink></h4>
      <div className="contact-form">
        <h4>Contact form: </h4>
        <ContactForm />
      </div>



    </div>
  )
}


export default Contact;