import React from "react";
import Image from "next/image";
import Button from "../Button";
import { homepageData } from "@/app/data/data";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/bull_photo_banner.png')] bg-cover bg-center w-screen h-96 grid grid-cols-11 md:grid-cols-12 grid-rows-6">
      <section className="flex col-start-11 row-start-6 justify-self-end md:justify-self-end md:row-start-2 mr-3">
        <Button text={"Next event"} location={"/events"} />
      </section>
      <div className="row-start-1 mt-3 md:row-start-2 md:mt-0 min-w-[350px] justify-self-center col-start-6 lg:min-w-[450px] lg:col-start-2 lg:justify-self-start 2xl:col-start-2 2xl:justify-self-start bg-gradient-to-r from-magenta via-citrus to-aqua h-[280px] px-4 py-4 rounded-2xl">
        <h1 className="font-bold text-4xl flex justify-start py-2 content-end text-black">
          Welcome to{" "}
          <Image
            src="./assets/BRUMAI_BLACK.svg"
            width="150"
            alt="brumAI logo"
            height="100"
            className="ml-2"
          />
        </h1>
        <p className="text-sm text-black font-medium lg:text-base mx-2">
          {homepageData.aboutBanner}
        </p>
      </div>
    </div>
  );
};

export default Banner;
