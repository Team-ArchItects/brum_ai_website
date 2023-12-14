"use client";

import supabase from "../../utils/supabase";
import { useState, useEffect } from "react";
import NextEventsMap from "./NextEventsMap";

const todayDate = new Date();
const newDate = `${todayDate.getFullYear()}-${todayDate.getMonth()}-${todayDate.getDate()}`;

console.log(todayDate);

console.log(todayDate);

export default function EventSection() {
  const [testEvents, setTestEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("testEvents")
        .select("*")
        .gt("display_until", newDate)
        .order("event_date", { ascending: true })
        .limit(2);
      console.log(data);
      if (error) {
        console.error("Error:", error.message);
        return;
      }

      if (data) {
        console.log("Data:", data); // Log the data variable to check the values

        // // Apply filtering and ordering
        // const filteredData = data.filter(event => new Date(event.display_until) > new Date());
        // const sortedData = filteredData.sort((a, b) => new Date(a.display_until) - new Date(b.display_until));
        // const limitedData = sortedData.slice(0, 2);

        setTestEvents(data);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="w-9/12 2xl:w-8/12 text-citrus text-center text-3xl pt-2">
      <h1 className="mt-8 text-6xl text-center p-4 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-citrus to-aqua">
        Upcoming Events
      </h1>
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 justify-center px-2 mb-9">
        {testEvents &&
          testEvents.map?.((nextEvents) => (
            <NextEventsMap key={nextEvents.id} data={nextEvents} />
          ))}
      </section>
    </section>
    // <div>
    //     <p>{testEvents?.[1]?.event_description}</p>
    // </div>
  );
}
