import AboutUsMap from "./Aboutus";
import { coreTeamData, websiteTeamData, aboutUsCopy } from "../data/data";

export const metadata = {
  title: "Brum.AI | About",
  description: "The home of AI in the Midlands.",
};

export default function AboutUs() {
  return (
    <section>
      <div className="flex flex-col items-center justify-between">
        <h1 className="mt-8 text-2xl md:text-3xl text-center p-4 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-citrus to-aqua">
          {aboutUsCopy.title}
        </h1>

        <div className="flex flex-col text-left w-9/12 p-2 md:px-10">
          <p>{aboutUsCopy.aboutUsP1}</p>
          <br />
          <p>{aboutUsCopy.aboutUsP2}</p>
          <br />
          <p>{aboutUsCopy.aboutUsP3}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="mt-8 text-2xl md:text-3xl p-4 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-citrus to-aqua">
          Brum AI Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 w-full lg:w-9/12">
          {coreTeamData.map((coreTeam) => {
            return <AboutUsMap key={coreTeam.id} data={coreTeam} />;
          })}
        </div>
      </div>
      <div className="flex flex-col items-center pb-8">
        <h1 className="mt-8 text-2xl md:text-3xl p-4 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-citrus to-aqua">
          Development Team
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 w-full lg:w-9/12">
          {websiteTeamData.map((websiteTeam) => {
            return <AboutUsMap key={websiteTeam.id} data={websiteTeam} />;
          })}
        </div>
      </div>
    </section>
  );
}
