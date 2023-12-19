"use client";

import supabase from "../../utils/supabase";
import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import TenseButtons from "./TenseButtons";
import MoreLessButtons from "./MoreLessButtons";
import EventCalendar from "./Calendar";
import CalendarSwitcher from "./Switch";
import EventList from "./EventList";


export default function EventDetails() {
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

  const showMoreEvents = () => {
    setEventsToShow(eventsToShow + 5);
  };
  const showLessEvents = () => {
    setEventsToShow(eventsToShow - 5);
  };

  function futureOrPast(tense) {
    setTimeFrame(tense);
  }

  return (
    <section className="w-full flex flex-col items-center">
      <CalendarSwitcher />
      <br></br>
      <EventCalendar eventsList={eventsList}/>
      <EventList eventsList={eventsList} showMoreEvents={showMoreEvents} showLessEvents={showLessEvents} timeFrame={timeFrame} futureOrPast={futureOrPast} eventsToShow={eventsToShow}/>

    </section>
  );
}
