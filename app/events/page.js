import EventList from './components/EventList'

export default function Events() {
  return (
    <section className="flex flex-col items-center px-4 md:px-24 py-6 md:py-20 min-h-screen">
    {/* <h1 className='my-16 text-5xl'>Events Page</h1> */}
      <EventList />
    </section>
    
  )
}