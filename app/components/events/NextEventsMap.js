export default function NextEventsMap({ data }) {
  const date = new Date(data.start_date);

  return (
    <a href={`${data.meetup_link}`} target="_blank" rel="noopener noreferrer">
      <article
        style={{
          backgroundImage: `linear-gradient(rgba(255, 130, 46, 0.6), rgba(255, 130, 46, 0.6)), url(${data.image_url})`,
        }}
        className={`border-4 border-citrus bg-cover bg-center rounded-2xl mt-5 mb-3 p-5 w-full max-w-[600px] justify-self-center`}
      >
        <h1 className="text-black font-bold text-3xl ">{`${data.event_name}`}</h1>

        <p className="text-black font-bold">{`${date
          .toString()
          .substring(4, 15)}`}</p>
        <p className="text-black font-bold text-base">{`${data.start_time.substring(
          0,
          5
        )} - ${data.end_time.substring(0, 5)}`}</p>
      </article>
    </a>
  );
}
