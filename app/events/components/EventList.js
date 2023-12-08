'use client'

import supabase from '../utils/supabase'
import {useEffect, useState } from 'react';
import { notFound } from 'next/navigation'
// import EventList from './components/EventList';

const idExample = "ff05cd27-ed7a-4861-af3c-34a2c829d12c"

// const supabase = createClient(URL, API);

export default function Events() {

  const [testEvents, setTestEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from('testEvents').select('*').eq('id', idExample)

      if (error) {
        console.error('Error', error.message);
        return;
      }

      setTestEvents(data);
  }
  fetchEvents();
  console.log(testEvents)
}
)}

//   const { data: testEvents } = await supabase.from('testEvents').select('*').eq('id', idExample)
// if (!testEvents) {
//     return <p>No testEvents found.</p>
//   }
// {console.log(testEvents)}
//   return <pre>{JSON.stringify(testEvents, null, 2)}</pre>
// }