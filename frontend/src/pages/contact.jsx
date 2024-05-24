import React, { useState } from 'react';
import "./contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [sent, setsent] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_apb83cm', 'template_9uanr3w', form.current, {
            publicKey: 'XL0BqIFInO5Ntj7Cc',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setsent(true)
              
            },
            (error) => {
                console.log('FAILED...', error.text);
                setsent(false)
            },
          );
      };

  return (
    <div id="contact">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name">
          <div className="name--input">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="from_name" 
              id="name" 
              required 
            />
          </div>
          <div className="name--input">
            <label htmlFor="surname">Surname</label>
            <input 
              type="text" 
              name="surname" 
              id="surname" 
              required 
            />
          </div>
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            required 
          />
        </div>
        <div className="input">
          <label htmlFor="subject">Subject</label>
          <input 
            type="text" 
            name="subject" 
            id="subject"  
            required 
          />
        </div>
        <div className="input">
          <label htmlFor="message">Message</label>
          <textarea 
            name="message" 
            id="message" 
            cols="30" 
            rows="10"  
            required 
          ></textarea>
        </div>
        <div className="input">
          {!sent &&<button className="btn" type="submit">Submit</button>}
          {sent &&<div className='sent'>mail sent succefully</div>}
        </div>
      </form>
    </div>
  );
}

export default Contact;
