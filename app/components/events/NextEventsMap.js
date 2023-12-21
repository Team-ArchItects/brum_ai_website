export default function NextEventsMap({ data }) {
  const date = new Date(data.start_date);
  let stringDate = date.toString();
  // let month = stringDate.substring(4, 7);
  let monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = date.getMonth();
  let day = stringDate.substring(8, 11);
  let year = stringDate.substring(10, 15);
  const image = data.image_url || "assets/placeholder_event_image.jpg";
  return (
    <a
      href={`${data.meetup_link}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit"
    >
      <article
        style={{
          backgroundImage: `linear-gradient(rgba(255, 148, 77, 0.87), rgba(255, 148, 77, 0.87)), url(${image})`,
        }}
        className={`border-4 border-citrus bg-cover bg-center rounded-2xl mt-5 mb-3 p-5 w-full min-w-[345px] md:min-w-[500px] 2xl:min-w-fit max-w-[600px] justify-self-center  transition-all hover:scale-110`}
      >
        <div className="flex flex-col ">
          <h1 className="text-black font-bold text-3xl backdrop-blur-sm w-fit self-center p-0.5">{`${data.event_name}`}</h1>

          <p className="text-black font-bold backdrop-blur-sm w-fit self-center text-2xl p-0.5">
            {
              // `${date
              //   .toString()
              //   .substring(4, 15)}`}</p>
              `${day + monthArray[month] + year}`
            }
          </p>
          <p className="text-black font-bold text-base backdrop-blur-sm w-fit self-center p-0.5">{`${data.start_time.substring(
            0,
            5
          )} - ${data.end_time.substring(0, 5)}`}</p>
        </div>
      </article>
    </a>
  );
}
