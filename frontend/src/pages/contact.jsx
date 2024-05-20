import React from 'react'
import {AiOutlineMail} from "react-icons/ai"
import {BsDiscord} from "react-icons/bs"
import "./contact.css"
import emailjs from '@emailjs/browser';
import {useRef} from "react"

function Contact() {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_lzfps1j', 'template_061iovj', form.current, '5ddo6PQPTT7fIycvW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };

  return (
    <div id = "contact">

            <form ref={form} onSubmit={sendEmail}>
                <div className="name">
                    <div className="name--input">
                        <label htmlFor="">name</label>
                        <input type="text" name="name" id="" />
                    </div>
                    <div className="name--input">
                        <label htmlFor="">surname</label>
                        <input type="text" name="surname" id="" />
                    </div>
                </div>
                <div className="input">
                    <label htmlFor="">email</label>
                    <input type="text" name="email" id="" />
                </div>
                <div className="input">
                    <label htmlFor="">subjet</label>
                    <input type="text" name="subject" id="" />
                </div>
                <div className="input">
                    <label htmlFor="">message</label>
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="input">
                    <button className="btn">submit</button>
                </div>
            </form>
    </div>
  )
}

export default Contact