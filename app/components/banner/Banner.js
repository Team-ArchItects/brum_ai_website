import React from 'react';
import "./banner.css";
// import banner from './assets/cityphoto';
import Image from 'next/image';
import Button from 'app/components/banner/Button.js'

{/* <div className="banner">
  <img src={banner} alt="Banner" />
  <div className="banner-content">
      <h1>aGuideHub</h1>
      <p>Welcome To aGuideHub! </p>
  </div>
</div> */}

const Banner = () => {
    return (
      <div className="bg-[url('/assets/cityphoto.png')] bg-cover bg-center w-screen h-96 flex-row">
        <div className="grid grid-cols-1">
      <section className="flex justify-end mr-6 mt-6">
      <div className="relative justify-end">
      <Button text={"Next event"} location={"/events"}/>
      </div>
      </section>
      <div className="relative w-64 md:w-80 lg:w-96 xl:w-102">
      <Image src="/assets/banner_content.png" width="500" height="250" alt="Banner" className="ml-12"/>
      </div>
      </div>
      </div>
    );
  }
  
  export default Banner;