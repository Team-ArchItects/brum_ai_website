import Image from "next/image";
import Button from "./banner/Button";
import SponsorsList from "./footer components/Sponsors";

export default function Footer({data}) {

  return (
    <section className="flex flex-col w-screen justify-between">
      <picture className=" flex z-0">
        <source
          srcSet="/assets/cropped_footer_white.png"
          media="(prefers-color-scheme: dark)"
        />
                <Image
          src="/assets/cropped_footer_black.png"
          alt="Footer graffiti"
          width="1800"
          height={100}
          className="h-40 w-6/12 scale-x-[-1]"
        />
        <Image
          src="/assets/cropped_footer_black.png"
          alt="Footer graffiti"
          width="2000"
          height={160}
          // sizes="50vw"
          // fill={true}
          className="w-6/12 h-40 ml-[-1px]"
        />
      </picture>
      <footer className="flex flex-col w-screen justify-between">
        <div className="flex flex-wrap justify-center space-x-2 items-center text-center z-10">
          {/* <Image
            src="/assets/original.png"
            width={100}
            height={100}
            alt="School of Code logo"
          />
          <picture>
            <source srcSet="/assets/huel_black.png" media="(prefers-color-scheme: dark)" />
          <Image
            src="/assets/huel_white.png"
            width={100}
            height={100}
            alt="School of Code logo"
          />
          </picture>
          <picture>
            <source srcSet="/assets/aston_black.png" media="(prefers-color-scheme: dark)" />
          <Image
            src="/assets/aston_white.png"
            width={100}
            height={100}
            alt="School of Code logo"
          />
          </picture>
          <p className="w-full p-3">Supported by these Amazing Companies</p> */}
          {data.map((sponsorsList) => {
          return <SponsorsList key={sponsorsList.id} data={sponsorsList} />
        })}
        <p className="w-full p-3">BRUM AI is supported by these amazing sponsors</p>
        </div>
        <div className="flex justify-end z-10 mr-56 mb-5">
          <Button text={"Contact Us"} location={"/contact"}/>
        </div>
        <div className="flex flex-wrap flex-col items-center z-10">
          <div className="p-px bg-black w-10/12 h-0 "></div>
          <div className="w-10/12 pb-32 pt-2 text-lg">
            <p>&copy; Copyright 2023 BrumAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
