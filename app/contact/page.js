"use client";

import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `react_website`,
        `react_contact_form`,
        form.current,
        `uqnxn2biN17xUCOuB`
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent!");
          e.target.reset(); // Clears the form after sending the email.
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h1 className="mt-7 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-magenta via-citrus to-aqua w-80 text-center">
        Contact Us Form
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="text-center mt-8 w-10/12 max-w-[600px] flex flex-col justify-center items-center w-full"
      >
        <label className="newlabel w-full " for="user_name">
          Name
        </label>
        <input
          className="outline-0 p-4 rounded-lg flex flex-col justify-center items-center w-10/12 my-4 resize-none border-2 border-zinc-700 dark:bg-zinc-700 text-black dark:text-white min-w-[300px]"
          type="text"
          name="user_name"
          id="user_name"
        />
        <label className="newlabel mb-2 w-full " for="user_email">
          Email
        </label>
        <input
          className="outline-0 p-4 rounded-lg flex flex-col justify-center items-center w-10/12 my-4 resize-none border-2 border-zinc-700 dark:bg-zinc-700 text-black dark:text-white min-w-[300px] "
          id="user_email"
          type="email"
          name="user_email"
        />
        <label className="newlabel w-full " for="message">
          Message
        </label>
        <textarea
          name="message"
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
    </section>
  );
};

export default ContactUs;
