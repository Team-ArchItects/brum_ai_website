import Image from "next/image";
import Link from "next/link";

export default function NextEventsMap({ data }) {
  return (
    <a href={""}>
      <article className="border-2 border-citrus rounded-2xl my-5 p-5">
        <h2 className="font-bold text-2xl">{`${data.event_name}`}</h2>
        {/* <Image src={eventData.image_url} alt="Event photos" width="100" height="100" /> */}
        <p>{`${data.event_description}`}</p>
        {/* <p>{`${""}`}</p> */}
      </article>
    </a>
  );
}