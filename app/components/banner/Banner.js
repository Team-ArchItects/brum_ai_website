import React from 'react';
import Image from 'next/image';
import Button from 'app/components/banner/Button.js'

const Banner = () => {
    return (
      <div className="bg-[url('/assets/cityphoto.png')] bg-cover bg-center w-screen h-96 grid grid-cols-6 grid-rows-3">
      <section className="flex justify-end mr-6 mt-6 col-start-5">
      <Button text={"Next event"} location={"/events"}/>
      </section>
      <Image src="/assets/banner_content.png" width="500" height="250" alt="Banner" className="ml-12 col-start-2 row-start-2"/>
      </div>
    );
  }
  
  export default Banner;