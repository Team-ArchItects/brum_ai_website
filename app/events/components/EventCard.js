import Image from "next/image";
import Link from "next/link";

export default function EventCard({ eventData, timeFrame }) {
  return (
    <a href={eventData.meetup_link}>
      <article className="border-2 border-citrus rounded-2xl my-5 p-5">
        <h2 className="font-bold text-2xl">{`${eventData.event_name}`}</h2>
        {/* <Image src={eventData.image_url} alt="Event photos" width="100" height="100" /> */}
        <p>{`${eventData.event_date}`}</p>
        {timeFrame === "future" && <p>{`${eventData.event_time}`}</p>}
        <p>{`${eventData.event_description}`}</p>
      </article>
    </a>
  );
}
