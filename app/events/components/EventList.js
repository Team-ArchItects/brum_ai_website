"use client";

import supabase from "../../utils/supabase";
import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import TenseButtons from "./TenseButtons";
import MoreLessButtons from "./MoreLessButtons";

export default function EventList() {
  const [testEvents, setTestEvents] = useState(null);
  const [timeFrame, setTimeFrame] = useState("future");
  const [eventsToShow, setEventsToShow] = useState(5);


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
    const visableEvents = eventCardArray.slice(0, eventsToShow);
    // visableEvents.length < eventsToShow && setEventsToShow(Math.ceil(visableEvents.length / 5) * 5)
    return visableEvents;
  }

  const showMoreEvents = () => {
    setEventsToShow(eventsToShow + 5);
  };
  const showLessEvents = () => {
    setEventsToShow(eventsToShow - 5);
  }

  return (
    <section className="w-full flex flex-col items-center">
      <TenseButtons futureOrPast={futureOrPast} />
      {dataPicker()}
      <MoreLessButtons showLessEvents={showLessEvents} showMoreEvents={showMoreEvents} noMore={eventsToShow > dataPicker().length} noLess={eventsToShow === 5 } />
    </section>
  );
}
