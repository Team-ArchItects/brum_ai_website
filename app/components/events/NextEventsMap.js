import Image from "next/image";
import Link from "next/link";

//

export default function NextEventsMap({ data }) {
  const date = new Date(data.event_date);
  const bgImage =
    "https://images.unsplash.com/photo-1545350089-47b3d117a92c?q=80&w=3866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <a href={`${data.meetup_link}`}>
      <article
      style={{ backgroundImage: `url(${data.image_url})` }}
        className={`border-2 border-citrus bg-cover bg-center rounded-2xl my-5 p-5`}
      >
        <h1 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-bold text-2xl">{`${data.event_name}`}</h1>
        {/* <Image
          src={data.image_url}
          alt="Event photo"
          unoptimized
          width="500"
          height="300"
          className="justify-self-center align-self-center 2xl:min-w-[400px]"
        /> */}
        <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{`${data.event_description}`}</p>
        {/* <p>{`${""}`}</p> */}
        <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{`${date.toString().substring(4, 15)}`}</p>
        <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{`${data.event_time.substring(0, 5)} - ${data.end_time.substring(
          0,
          5
        )}`}</p>
      </article>
    </a>
  );
}
