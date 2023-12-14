"use client";

import supabase from "../../utils/supabase";
import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import TenseButtons from "./TenseButtons";

export default function EventList() {
  const [testEvents, setTestEvents] = useState(null);
  const [timeFrame, setTimeFrame] = useState("future");

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("testEvents")
        .select("*")
        .order("event_date", { ascending: true });
      /*.eq('id', idExample)*/

      if (error) {
        console.error("Error", error.message);
        return;
      }
      if (data) {
        setTestEvents(data);
      }
      console.log(data);
    };
    fetchEvents();
  }, []);

  function futureOrPast(tense) {
    setTimeFrame(tense);
  }

  function dataPicker() {
    const eventCardArray = [];
    if (testEvents !== null) {
      if (timeFrame === "future") {
        testEvents
          .filter((eventData) => {
            const d1 = new Date();
            const d2 = new Date(eventData.event_date);
            const decider = d1.getTime() < d2.getTime();
            return decider;
          })
          .map((eventData) => {
            eventCardArray.push(
              <EventCard
                key={eventData.id}
                eventData={eventData}
                timeFrame={timeFrame}
              />
            );
          });
      } else if (timeFrame === "past") {
        testEvents
          .filter((eventData) => {
            const d1 = new Date();
            const d2 = new Date(eventData.event_date);
            const decider = d1.getTime() > d2.getTime();
            return decider;
          })
          .toReversed()
          .map((eventData) => {
            eventCardArray.push(
              <EventCard
                key={eventData.id}
                eventData={eventData}
                timeFrame={timeFrame}
              />
            );
          });
      }
    }
    return eventCardArray;
  }

  return (
    <section className="w-full flex flex-col items-center">
      <TenseButtons futureOrPast={futureOrPast} />
      {dataPicker()}
    </section>
  );
}
