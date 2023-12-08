import Image from "next/image";
// import Link from "next/link";
// import LinkedInLink from "./header components/LinkedIn_Link";
// import DiscordLink from "./header components/Discord_Link";
// import XLink from "./header components/X-Link";
// import InstagramLink from "./header components/Instargram_Link";
// import MeetupLink from "./header components/Meetup_Link";
import Dropdown from "./header components/Dropdown";
import SocialsList from "./header components/Socials";
import SocialDropdown from "./header components/Social_Dropdown";

export default function Header({data, pages}) {
  return (
    <section className="grid grid-cols-3 md:grid-cols-[2fr_1fr_2fr] gap-2 place-content-evenly items-center width-screen h-4 justify-between p-8 bg-navy text-white">
      <div className="flex justify-start ">
      <div className="flex">

      <Dropdown pages={pages} />
      </div>
     
        {/* <p>Menu &#8642;</p> */}
        {/* <p className="z-10">About Us</p>
        <p className="z-10">Volunteer</p> */}
      </div>
      <div className="flex justify-center">
        <Image
          src="/assets/orange_logo.png"
          width={100}
          height={100}
          alt="Brumai Logo in orange"
        />
      </div>
      {/* <div className="flex justify-end space-x-2 items-center">
        <MeetupLink />
        <LinkedInLink />
        <DiscordLink />
        <XLink />
        <InstagramLink />
      </div> */}
      <div className="flex justify-end items-center">
      <SocialDropdown data={data}/>
      <div className="hidden md:flex justify-end items-center space-x-4">
      {data.map((socialsList) => {
          return <SocialsList key={socialsList.id} data={socialsList} />
        })}
      </div>
        
      </div>
    </section>
  );
}
