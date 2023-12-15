"use client";

import supabase from "../../utils/supabase";
import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import TenseButtons from "./TenseButtons";
import MoreLessButtons from "./MoreLessButtons";

export default function EventList() {
  const [eventsList, setEventsList] = useState(null);
  const [timeFrame, setTimeFrame] = useState("future");
  const [eventsToShow, setEventsToShow] = useState(5);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("eventsList")
        .select("*")
        .order("start_date", { ascending: true });

      if (error) {
        console.error("Error", error.message);
        return;
      }
      if (data) {
        setEventsList(data);
      }
    };
    fetchEvents();
  }, []);

  function futureOrPast(tense) {
    setTimeFrame(tense);
  }

  function dataPicker() {
    const eventCardArray = [];
    if (eventsList !== null) {
      if (timeFrame === "future") {
        eventsList
          .filter((eventData) => {
            const d1 = new Date();
            const d2 = new Date(eventData.start_date);
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
        eventsList
          .filter((eventData) => {
            const d1 = new Date();
            const d2 = new Date(eventData.start_date);
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
    const visableEvents =
      eventCardArray.length === 0 ? (
        <h3 className="text-4xl text-black dark:text-white my-10">
          No events scheduled at the moment, please check back soon!
        </h3>
      ) : (
        eventCardArray.slice(0, eventsToShow)
      );
    return visableEvents;
  }

  const showMoreEvents = () => {
    setEventsToShow(eventsToShow + 5);
  };
  const showLessEvents = () => {
    setEventsToShow(eventsToShow - 5);
  };

  return (
    <section className="w-full flex flex-col items-center">
      <TenseButtons futureOrPast={futureOrPast} />
      {dataPicker()}
      <MoreLessButtons
        showLessEvents={showLessEvents}
        showMoreEvents={showMoreEvents}
        noMore={eventsToShow > dataPicker().length}
        noLess={eventsToShow === 5}
      />
    </section>
  );
}
