import Image from "next/image";
import Link from "next/link";
import LinkedInLink from "./header components/LinkedIn_Link";
import DiscordLink from "./header components/Discord_Link";
import XLink from "./header components/X-Link";
import InstagramLink from "./header components/Instargram_Link";
import MeetupLink from "./header components/Meetup_Link";
import Dropdown from "./header components/Dropdown";

export default function Header() {
  return (
    <section className="grid grid-cols-3 gap-4 place-content-evenly items-center width-screen h-4 justify-between p-8 bg-navy text-white">
      <div className="flex justify-start ">
      
      <Dropdown />
     
        {/* <p>Menu &#8642;</p> */}
        <p className="z-10">About Us</p>
        <p className="z-10">Volunteer</p>
      </div>
      <div className="flex justify-center">
        <Image
          src="/assets/orange_logo.png"
          width={100}
          height={100}
          alt="Brumai Logo in orange"
        />
      </div>
      <div className="flex justify-end space-x-2 items-center">
        <MeetupLink />
        <LinkedInLink />
        <DiscordLink />
        <XLink />
        <InstagramLink />
      </div>
    </section>
  );
}
