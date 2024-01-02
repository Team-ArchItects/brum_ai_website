"use client";

import supabase from "../../utils/supabase";
import { useState, useEffect } from "react";
import NextEventsMap from "./NextEventsMap";
import Button from "../Button";

const todayDate = new Date();
const newDate = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`;

export default function EventSection() {
  const [eventsList, setEventsList] = useState([]);
  
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
    <section className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 2xl:w-8/12 max-w-[1650px] flex flex-col items-center">
      <div className="w-full text-center text-3xl pt-2 flex flex-col items-center  ">
        <h1 className="my-8 text-4xl md:text-5xl text-center p-4 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-citrus to-aqua">
          Upcoming Events
        </h1>
        <div className="w-full lg:w-9/12 grid grid-cols-1 2xl:grid-cols-2 gap-x-4 gap-y-4 place-items-center px-3 mb-5">
          {eventsList.length === 0 ? (
            <h3 className="text-4xl text-black dark:text-white my-10">
              No events scheduled at the moment, please check back soon!
            </h3>
          ) : (
            eventsList.map?.((nextEvents) => (
              <NextEventsMap key={nextEvents.id} data={nextEvents} />
            ))
          )}
        </div>
      </div>
      <div className="w-full lg:w-9/12 flex justify-end mb-10 mr-3">
        <Button text={"More Events"} location={"/events"} />
      </div>
    </section>
  );
}
