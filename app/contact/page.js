"use client"
//import './contact.css';
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

    <div className=' flex flex-col justify-center items-center '>
    <form ref={form} onSubmit={sendEmail} className='text-center mt-8 w-10/12 max-w-[600px]'>
      <label className='newlabel'>Name</label>
      <input className='border-0 outline-0 p-4 rounded-lg flex flex-col justify-center items-center w-full my-4 resize-none bg-zinc-700 text-white min-w-[300px]' type="text" name="user_name" id='newInput'/>
      <label className='newlabel mb-2'>Email</label>
      <input className='border-0 outline-0 p-4 rounded-lg flex flex-col justify-center items-center w-full my-4 resize-none bg-zinc-700 text-white min-w-[300px] ' id='newInput' type="email" name="user_email" />
      <label className='newlabel'>Message</label>
      <textarea name="message" className='border-0 outline-0 p-4 rounded-lg flex flex-col justify-center items-center w-full mt-4 resize-none text-black min-w-[300px] h-96 bg-zinc-700 text-white' type="text" id='newInput'/>
      <input type="submit" value="Send" id="input-submit" className='text-black bg-orange-500 cursor-pointer mt-8 px-6 py-2 rounded'/>
    </form>
    </div>
  );
};

export default ContactUs

