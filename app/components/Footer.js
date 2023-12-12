import Image from "next/image";
import Button from "./banner/Button";
import SponsorsList from "./footer components/Sponsors";

export default function Footer({data}) {

  return (
    <section className="flex flex-col w-screen justify-between min-w-[360px] ">
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
      <footer className="flex flex-col w-screen justify-between min-w-[360px] pt-3">
        <div className="flex flex-wrap justify-center space-x-4 items-center text-center z-10">
          {data.map((sponsorsList) => {
          return <SponsorsList key={sponsorsList.id} data={sponsorsList} />
        })}
        <p className="w-full p-3">BRUM AI is supported by these amazing sponsors</p>
        </div>
        <div className="grid grid-cols-2 z-10 w-10/12 items-end self-center pb-1">
          <div><Button text={"Buy us a coffee"} location={"https://www.buymeacoffee.com/brumai"} className="self-start"/></div>
          <div className="justify-self-end"><Button text={"Contact Us"} location={"/contact"} /></div>
        </div>
        <div className="flex flex-wrap flex-col items-center z-10">
          <div className="p-px bg-white dark:bg-black w-10/12 h-0 "></div>
          <div className="w-10/12 pb-32 pt-2 text-lg">
            <p>&copy; Copyright 2023 BrumAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
