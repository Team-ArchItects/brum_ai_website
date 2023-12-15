import Banner from "app/components/banner/Banner.js";
import EventSection from "app/components/events/Events.js";
import GetInvolved from "./components/get_involved_section/GetInvolved";
import YouTube from "./components/social_media/YouTube";
import EmbedInstagram from "./components/social_media/EmbedInstagram";
import EmbedTwitter from "./components/social_media/EmbedTwitter";
import EmbedLinkedIn from "./components/social_media/EmbedLinkedIn";
import { homepageData } from "./data/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 overflow-x-hidden">
      <Banner />
      <EventSection />
      <YouTube />
      <EmbedInstagram />
      <EmbedLinkedIn />
      <EmbedTwitter />
      <GetInvolved data={homepageData} />
    </main>
  );
}
