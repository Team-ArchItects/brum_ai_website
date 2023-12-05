import React from 'react';
import "./banner.css";
// import banner from './assets/cityphoto';
import Image from 'next/image';

{/* <div className="banner">
  <img src={banner} alt="Banner" />
  <div className="banner-content">
      <h1>aGuideHub</h1>
      <p>Welcome To aGuideHub! </p>
  </div>
</div> */}

const Banner = () => {
    return (
      <div className="banner">
        <Image src="/cityphoto.png" width="50" height="50" alt="Banner" />
        <div className="banner-content">
          <h1>aGuideHub</h1>
          <p>Welcome To aGuideHub! </p>
        </div>
      </div>
    );
  }
  
  export default Banner;