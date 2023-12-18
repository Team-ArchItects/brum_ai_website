import EventList from './components/EventList'
import EventCalendar from './components/Calendar'

export default function Events() {
  return (
    <section className="flex flex-col items-center px-4 md:px-24 py-6 md:py-20 min-h-screen">
    <h1 className='mb-5 h-14 text-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-magenta via-citrus to-aqua w-80'>Events Page</h1>
      <EventCalendar />
      <EventList />
    </section>
    
  )
}