import EventList from './components/EventList'

export default function Events() {
  return (
    <section className="flex  flex-col items-center justify-between px-24">
    <h1 className=''>Events Page</h1>
      <EventList />
    </section>
    
  )
}