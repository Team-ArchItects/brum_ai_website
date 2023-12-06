import React from 'react';
import Image from 'next/image';
import Button from 'app/components/banner/Button.js'

const Banner = () => {
    return (
      <div className="bg-[url('/assets/cityphoto.png')] bg-cover bg-center w-screen h-96 grid grid-cols-12 grid-rows-6">
      <section className="flex col-start-11 row-start-2">
      <Button text={"Next event"} location={"/events"}/>
      </section>
      <Image src="/assets/banner_content.png" width="500" height="250" alt="Banner" className="col-start-5 row-start-2 min-w-[450px] justify-self-end"/>
      </div>
    );
  }
  
  export default Banner;