import React from "react";
import Image from "next/image";
import Button from "app/components/banner/Button.js";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/cityphoto.png')] bg-cover bg-center w-screen h-96 grid grid-cols-11 md:grid-cols-12 grid-rows-6">

      <section className="flex col-start-11 row-start-6 justify-self-end md:justify-self-end md:row-start-2">
        <Button text={"Next event"} location={"/events"} />
      </section>
      <div
        className="row-start-2 min-w-[350px] justify-self-center col-start-6 lg:min-w-[450px] lg:col-start-2 lg:justify-self-start 2xl:col-start-2 2xl:justify-self-start bg-[url('/assets/plain_banner.png')]">
        <div>
        <h1>Welcome to</h1>
        </div>
        <img src="./assets/BRUMAI_BLACK.svg" width="150px"></img>
        <p>
          BrumAI is the home of AI in the Midlands. We are a dynamic community
          dedicated to fostering innovation, collaboration, and learning in the
          field of Artificial Intelligence. Our mission is to unite individuals
          passionate about AI, creating a platform where ideas are exchanged,
          knowledge is enriched, and connections are formed.
        </p>
      </div>
    </div>
  );
};

export default Banner;
