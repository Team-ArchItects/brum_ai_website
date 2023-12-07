import React from 'react';
import Image from 'next/image';
import Button from 'app/components/banner/Button.js'

const Banner = () => {
    return (
      <div className="bg-[url('/assets/cityphoto.png')] bg-cover bg-center w-screen h-96 grid grid-cols-11 md:grid-cols-12 grid-rows-6">
      <section className="flex col-start-11 row-start-6 justify-self-end md:justify-self-end md:row-start-2">
      <Button text={"Next event"} location={"/events"}/>
      </section>
      <Image src="/assets/banner_content.png" width="500" height="250" alt="Banner" className="row-start-2 min-w-[350px] justify-self-center col-start-6 row-start-2 lg:min-w-[450px] lg:col-start-2 lg:justify-self-start 2xl:col-start-2 2xl:justify-self-start"/>
      </div>
    );
  }
  
  export default Banner;