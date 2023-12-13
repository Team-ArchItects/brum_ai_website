import Button from "@/app/components/banner/Button";
import Image from "next/image";
import Link from "next/link";

export default function EventCard({ eventData, timeFrame }) {
    const date =new Date(eventData.event_date)
  return (
    
      <article className="w-9/12 border-2 border-citrus rounded-2xl my-5 p-5 ">
       <a href={eventData.meetup_link}><h2 className="font-bold text-2xl mb-5">{`${eventData.event_name}`}</h2></a>
        {/* {timeFrame === "past" && <Image src="https://images.unsplash.com/photo-1545350089-47b3d117a92c?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Event photo" width="150" height="150" />} */}
        <div className="grid grid-rows-2 2xl:grid-cols-[1fr_2fr] 2xl:grid-rows-none gap-6">
          <Image
            src="/assets/placeholder_event_image.jpg"
            alt="Placeholder photo"
            width="500"
            height="300"
            className="justify-self-center align-self-center 2xl:min-w-[400px]"
          />
          <div className="flex flex-col justify-between py-3">
            <p><span className="font-semibold underline">Date</span>: {`${date.toString().substring(4, 15)}`}</p>
            {timeFrame === "future" && (
              <p><span className="font-semibold underline">Time</span>: {`${eventData.event_time.substring(0,5)} - ${eventData.end_time.substring(0,5)}`}</p>
            )}
            <p><span className="font-semibold underline">Venue</span>: {`${eventData.event_location}`}</p>
            <p><span className="font-semibold underline">Event details</span>: {`${eventData.event_description}`}</p>
            {timeFrame === "future" &&(
            <span className="self-end"><Button text={"Attend the Event"} location={eventData.meetup_link}></Button></span>)}
          </div>
        </div>
      </article>
  );
}
