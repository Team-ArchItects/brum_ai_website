export default function GetInvolved({ data }) {
  return (
    <section className="bg-[url('/assets/getinvolvedgraphic_white.png')] bg-center bg-cover bg-no-repeat w-full min-w-[340px] min-h-[400px] max-w-[1900px] flex justify-center items-center pt-12 pb-20 px-0 lg:px-16 xl:px-36 2xl:px-64">
      <div className="w-4/5 flex flex-col items-center p-1 min-h-[333px]">
        <h3 className="md:text-6xl text-5xl text-center w-96 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-citrus to-aqua">
          Get Involved
        </h3>
        <p className="font-bold text-black self-start py-4">
          {data.volunteerTitle}
        </p>
        <p className="text-black">{data.volunteerCopyTop}</p>
        <br />
        <p className="text-black">{data.volunteerCopyBottom}</p>
        <p className="font-bold text-black self-start py-4">
          {data.sponsorTitle}
        </p>
        <p className="text-black bg-white">{data.sponsorCopyTop}</p>
        <br />
        <p className="text-black bg-white">{data.sponsorCopyBottom}</p>
      </div>
    </section>
  );
}
