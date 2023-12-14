import Image from "next/image";
import Banner from "app/components/banner/Banner.js";
import EventSection from "app/components/events/Events.js";
import GetInvolved from "./components/get_involved_section/GetInvolved";
import Tweet from "./components/Tweet";
import YouTube from "./components/YouTube";
import EmbedInstagram from "./components/instagram/EmbedInstagram";
import EmbedTwitter from "./components/EmbedTwitter";
import EmbedLinkedIn from "./components/EmbedLinkedIn";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 ">
      <Banner />
      <EventSection />
      {/* <div className="mt-10">
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7119108494506565632"></iframe>
      </div> */}
      <YouTube />
      <EmbedInstagram />
      <EmbedLinkedIn />
      <EmbedTwitter />
      {/* <Tweet /> */}
      <GetInvolved />
    </main>
  );
}

