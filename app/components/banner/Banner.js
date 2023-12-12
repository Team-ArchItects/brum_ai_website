import React from "react";
import Image from "next/image";
import Button from "app/components/banner/Button.js";
//bg-[url('/assets/plain_banner.png')]
const Banner = () => {
  return (
    <div className="bg-[url('/assets/cityphoto.png')] bg-cover bg-center w-screen h-96 grid grid-cols-11 md:grid-cols-12 grid-rows-6">

      <section className="flex col-start-11 row-start-6 justify-self-end md:justify-self-end md:row-start-2">
        <Button text={"Next event"} location={"/events"} />
      </section>
      <div
        className="row-start-1 mt-3 md:row-start-2 md:mt-0 min-w-[350px] justify-self-center col-start-6 lg:min-w-[450px] lg:col-start-2 lg:justify-self-start 2xl:col-start-2 2xl:justify-self-start bg-gradient-to-r from-magenta via-citrus to-aqua h-[270px] px-4 py-4 rounded-2xl">
        {/* <div className="flex justify-start space-x-4 p-2"> */}
        <h1 className="font-bold text-3xl flex justify-start py-2 content-end ">Welcome to <Image src="./assets/BRUMAI_BLACK.svg" width="150" alt="brumAI logo" height="100" className="ml-2"/></h1>
        
           
        {/* </div>      */}
        <p className="text-sm lg:text-base" >
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
