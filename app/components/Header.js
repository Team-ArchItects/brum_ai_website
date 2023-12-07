import Image from "next/image";
// import Link from "next/link";
// import LinkedInLink from "./header components/LinkedIn_Link";
// import DiscordLink from "./header components/Discord_Link";
// import XLink from "./header components/X-Link";
// import InstagramLink from "./header components/Instargram_Link";
// import MeetupLink from "./header components/Meetup_Link";
import Dropdown from "./header components/Dropdown";
import Socials from "./header components/Socials";

export default function Header({data, pages}) {
  return (
    <section className="grid grid-cols-5 gap-4 place-content-evenly items-center width-screen h-4 justify-between p-8 bg-navy text-white">
      <div className="flex justify-start ">
      <div className="col-span-2 flex">

      <Dropdown pages={pages} />
      </div>
     
        {/* <p>Menu &#8642;</p> */}
        {/* <p className="z-10">About Us</p>
        <p className="z-10">Volunteer</p> */}
      </div>
      <div className="flex justify-center col-start-3">
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
      <div className="flex justify-end space-x-4 items-center col-span-2">
        {data.map((socialsList) => {
          return <Socials key={socialsList.id} data={socialsList} />
        })}
      </div>
    </section>
  );
}
