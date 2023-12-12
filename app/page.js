import Image from "next/image";
import Banner from "app/components/banner/Banner.js";
import EventSection from "app/components/events/Events.js";
import Instagram from "app/components/instagram_carousel/Instagram.js";
import GetInvolved from "./components/get_involved_section/GetInvolved";
import InstaFeed from "./components/instagram/InstaFeed";
import Tweet from "./components/Tweet";
import YouTube from "./components/YouTube";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <Banner />
      <EventSection />
      <Instagram />
      {/* <div className="mt-10">
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7119108494506565632"></iframe>
      </div> */}
      <YouTube />
      {/* <InstaFeed /> */}
      {/* <Tweet /> */}
      <GetInvolved />
    </main>
  );
}
