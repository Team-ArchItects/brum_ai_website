"use client"
import './contact.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`react_website`, `react_contact_form`, form.current, `uqnxn2biN17xUCOuB`)
      .then((result) => {
          console.log(result.text);
          console.log("Message sent!")
          e.target.reset(); // Clears the form after sending the email.
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <>
    <form ref={form} onSubmit={sendEmail}>
      <label className='newlabel'>Name</label>
      <input type="text" name="user_name" className='newInput'/>
      <label className='newlabel'>Email</label>
      <input type="email" name="user_email" className='newInput'/>
      <label className='newlabel'>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" id="input-submit" className='buttonGap'/>
    </form>
    </>
  );
};

export default ContactUs

