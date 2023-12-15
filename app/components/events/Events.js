"use client";

import supabase from "../../utils/supabase";
import { useState, useEffect } from "react";
import NextEventsMap from "./NextEventsMap";
import Button from "../Button";

const todayDate = new Date();
const newDate = `${todayDate.getFullYear()}-${todayDate.getMonth()}-${todayDate.getDate()}`;

export default function EventSection() {
  const [eventsList, setEventsList] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("eventsList")
        .select("*")
        .gt("display_until_date", newDate)
        .order("start_date", { ascending: true })
        .limit(2);

      if (error) {
        console.error("Error:", error.message);
        return;
      }

      if (data) {
        setEventsList(data);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 2xl:w-8/12 max-w-[1650px] text-center text-3xl pt-2 flex flex-col items-center mb-10">
      <h1 className="mt-8 text-4xl md:text-5xl text-center p-4 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-citrus to-aqua">
        Upcoming Events
      </h1>
      <section className="w-full lg:w-9/12 grid grid-cols-1 2xl:grid-cols-2 gap-x-4 justify-center px-2 mb-9">
        {eventsList &&
          eventsList.map?.((nextEvents) => (
            <NextEventsMap key={nextEvents.id} data={nextEvents} />
          ))}
      </section>
      <Button text={"More Events"} location={"/events"} />
    </section>
  );
}
