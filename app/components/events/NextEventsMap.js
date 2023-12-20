export default function NextEventsMap({ data }) {
  const date = new Date(data.start_date);
const image = data.image_url || "assets/placeholder_event_image.jpg";
  return (
    <a href={`${data.meetup_link}`} target="_blank" rel="noopener noreferrer"className="w-fit">
      <article
        style={{
          backgroundImage: `linear-gradient(rgba(255, 130, 46, 0.8), rgba(255, 130, 46, 0.8)), url(${image})`,
        }}
        className={`border-4 border-citrus bg-cover bg-center rounded-2xl mt-5 mb-3 p-5 w-full max-w-[600px] justify-self-center`}
      >
        <div className="backdrop-blur-sm">
        <h1 className="text-black font-bold text-3xl backdrop-blur-sm">{`${data.event_name}`}</h1>

        <p className="text-black font-bold">{`${date
          .toString()
          .substring(4, 15)}`}</p>
        <p className="text-black font-bold text-base">{`${data.start_time.substring(
          0,
          5
        )} - ${data.end_time.substring(0, 5)}`}</p>
        </div>

      </article>
    </a>
  );
}
