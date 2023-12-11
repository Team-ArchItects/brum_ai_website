'use client'

import supabase from '../../utils/supabase'
import {useState, useEffect } from 'react';
import EventCard from './EventCard';


export default function EventList() {
  const [testEvents, setTestEvents] = useState(null);
  function setData (data) {
    setTestEvents(data)
  }
  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from('testEvents').select('*')/*.eq('id', idExample)*/
  
      if (error) {
        console.error('Error', error.message);
        return;
      }
      if(data) {
          setData( await data);
      } 
      console.log(await data)
  }
  fetchEvents();
}, []);



return (
  <section>
    {testEvents && testEvents.filter(eventData => {
      const d1 = new Date();
      const d2 = new Date(eventData.display_until);
      return d1.getTime() > d2.getTime();
    }).map((eventData) => {
      return <EventCard key={eventData.id} eventData={eventData} />
    })}
  </section>
)
}

