import Link from 'next/link'
export default function GetInvolved({ data }) {

  return (
    <section className={ `bg-[url("/assets/getinvolvedgraphic_black2.png")] dark:bg-[url("/assets/getinvolvedgraphic_white.png")] dark:text-black text-white bg-center bg-cover bg-no-repeat w-full min-w-[340px] min-h-[400px] max-w-[1900px] flex justify-center items-center pt-12 pb-20 px-0 lg:px-16 xl:px-36 2xl:px-64 mt-8` }>
      <div className="w-4/5 flex flex-col items-center p-1 min-h-[333px]">
        <h3 className="md:text-6xl text-5xl text-center w-96 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-citrus to-aqua">
          Get Involved
        </h3>
        <p className="font-bold  self-start py-4">
          {data.volunteerTitle}
        </p>
        <p>{data.volunteerCopyTop}</p>
        <br />
        <p >{data.volunteerCopyBottom}</p>
        <p className="font-bold  self-start py-4">
          {data.sponsorTitle}
        </p>
        <p className=" dark:bg-white bg-black">{data.sponsorCopyTop}<Link href="/contact" className="text-citrus hover:text-orange-600"> Contact us now!</Link></p>
        <br />
        <p className="dark:bg-white bg-black">{data.sponsorCopyBottom}</p>
      </div>
    </section>
  );
}
