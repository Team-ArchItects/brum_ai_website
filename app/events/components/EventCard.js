import Button from "@/app/components/Button";
import Image from "next/image";

export default function EventCard({ eventData, timeFrame }) {
  const date = new Date(eventData.start_date);
  return (
    <article className="w-full sm:w-11/12 md:w-9/12 border-2 border-citrus rounded-2xl my-5 p-5 ">
      {timeFrame === "future" ? (
        <a
          href={eventData.meetup_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="font-bold text-2xl mb-5 hover:text-citrus">{`${eventData.event_name}`}</h2>
        </a>
      ) : (
        <h2 className="font-bold text-2xl mb-5">{`${eventData.event_name}`}</h2>
      )}
      <div className="flex flex-col 2xl:grid 2xl:grid-cols-[1fr_2fr] 2xl:grid-rows-none gap-6">
        <Image
          src={eventData.image_url}
          alt="Placeholder photo"
          unoptimized
          width="500"
          height="300"
          className="justify-self-center self-center 2xl:min-w-[400px] max-h-[400px]"
        />
        <div className="flex flex-col justify-between py-3">
          <p>
            <span className="font-semibold underline">Date</span>:{" "}
            {`${date.toString().substring(4, 15)}`}
          </p>
          {timeFrame === "future" && (
            <p>
              <span className="font-semibold underline">Time</span>:{" "}
              {`${eventData.start_time.substring(
                0,
                5
              )} - ${eventData.end_time.substring(0, 5)}`}
            </p>
          )}
          <p>
            <span className="font-semibold underline">Venue</span>:{" "}
            {`${eventData.event_location}`}
          </p>
          <p>
            <span className="font-semibold underline">Event details</span>:{" "}
            {`${eventData.event_description}`}
          </p>
          {timeFrame === "future" && (
            <span className="self-end mt-4">
              <Button
                text={"Attend the Event"}
                location={eventData.meetup_link}
              ></Button>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
