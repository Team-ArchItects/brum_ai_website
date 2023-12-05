import React from 'react';
import "./banner.css";
import banner from './assets/cityphoto';

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
        <img src={banner} alt="Banner" />
        <div className="banner-content">
          <h1>aGuideHub</h1>
          <p>Welcome To aGuideHub! </p>
        </div>
      </div>
    );
  }
  
  export default Banner;