import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);  const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("all good");
            setStateMessage('Message sent!');
            setIsSubmitting(false);
            setTimeout(() => {
                setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          },
          (error) => {

            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          }
        );
      
      // Clears the form after sending the email
      e.target.reset();
    };  return (
      <form className='contact-form' onSubmit={sendEmail}>
        <div className='contact-info'>
            <input type="text" placeholder="Your name" name="name" required />
        </div>
        <div className='contact-info'>
            <input type="email" placeholder="Email" name="email" required />
        </div>
        <div className='contact-text'>
            <textarea rows="5" placeholder="Your message" name="message" required />
        </div>
        <div className='contact-button'>
            <input type="submit" value="Send" disabled={isSubmitting} />
        </div>
        {stateMessage && <p>{stateMessage}</p>}
      </form>
    );
  };export default ContactForm;