"use client";

import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

export const ContactUsForm = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        `react_website`,
        `react_contact_form`,
        form.current,
        `uqnxn2biN17xUCOuB`
      )
      .then(
        (result) => {
          setIsMessageSent(true);
          e.target.reset(); // Clears the form after sending the email.
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="mt-7 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-magenta via-citrus to-aqua w-80 text-center">
        Contact Us Form
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="text-center mt-8 w-10/12 max-w-[600px] flex flex-col justify-center items-center"
      >
        <label className="newlabel w-full" htmlFor="user_name">
          Name
        </label>
        <input
          className="outline-0 p-4 rounded-lg flex flex-col justify-center items-center w-10/12 my-4 resize-none border-2 border-zinc-700 dark:bg-zinc-700 text-black dark:text-white min-w-[300px]"
          type="text"
          name="user_name"
          required
          id="user_name"
        />
        <label className="newlabel w-full " htmlFor="user_email">
          Email
        </label>
        <input
          className="outline-0 p-4 rounded-lg flex flex-col justify-center items-center w-10/12 my-4 resize-none border-2 border-zinc-700 dark:bg-zinc-700 text-black dark:text-white min-w-[300px] "
          id="user_email"
          required
          type="email"
          name="user_email"
        />
        <label className="newlabel w-full " htmlFor="user_subject">
          Subject
        </label>
        <select
          className="outline-0 p-4 rounded-lg flex flex-col justify-center items-center w-10/12 my-4 resize-none border-2 border-zinc-700 dark:bg-zinc-700 text-black dark:text-white min-w-[300px] "
          id="user_subject"
          required
          type="select"
          name="user_subject"
        >
          <option value="Event Queries">Event Queries</option>
          <option value="Volunteering">Volunteering</option>
          <option value="Sponsorship">Sponsorship</option>
          <option value="Speaker Enquiry">Speaker Enquiry</option>
          <option value="General">General</option>
          
        </select>
        <label className="newlabel w-full " htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          required
          className="outline-0 p-4 rounded-lg flex flex-col justify-center items-center w-10/12 mt-4 resize-none min-w-[300px] h-96 border-2 border-zinc-700 dark:bg-zinc-700 text-black dark:text-white"
          type="text"
          id="message"
        />
        <input
          type="submit"
          value="Send"
          id="input-submit"
          className="text-black bg-orange-500 cursor-pointer mt-8 px-6 py-2 rounded"
        />
      </form>

      {isMessageSent && (
        <div className="notification">
          Message sent successfully! {/* You can customize this message */}
        </div>
      )}
    </div>
  );
};

export default ContactUsForm;
