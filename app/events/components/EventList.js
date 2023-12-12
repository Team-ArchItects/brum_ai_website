'use client'

import supabase from '../../utils/supabase'
import {useState, useEffect } from 'react';
import EventCard from './EventCard';
import TenseButtons from './TenseButtons';


export default function EventList() {
  const [testEvents, setTestEvents] = useState(null);
  const [timeFrame, setTimeFrame] = useState("future");


  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from('testEvents').select('*')/*.eq('id', idExample)*/
  
      if (error) {
        console.error('Error', error.message);
        return;
      }
      if(data) {
          setTestEvents( await data);
      } 
      console.log(await data)
  }
  fetchEvents();
}, []);

function futureOrPast (tense) {
  setTimeFrame(tense);
} 


return (
  <section>
    <TenseButtons futureOrPast={futureOrPast} />
    {testEvents && testEvents.filter(eventData => {
      const d1 = new Date();
      const d2 = new Date(eventData.display_until);
      const decider = timeFrame === "future" ? (d1.getTime() < d2.getTime()) : (d1.getTime() > d2.getTime());
      return decider;
    }).map((eventData) => {
      return <EventCard key={eventData.id} eventData={eventData} timeFrame={timeFrame}/>
    })}
  </section>
)
}

