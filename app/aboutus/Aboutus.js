import Image from "next/image";
import LinkedInImage from "./LinkedInImage";

export default function AboutUsMap({ data }) {
  return (
    <section className="grid grid-cols-3 p-4">
      <div className="col-span-1 flex justify-center items-center ">
        <Image
          src={data.imageUrl}
          alt={`Profile photo of ${data.name}`}
          width={150}
          height={150}
          className="rounded-full aspect-auto aspect-[100/99]"
        />
      </div>
      <div className="col-span-2 px-4">
        <h3 className="text-citrus">{data.name}</h3>
        <p className="italic">{data.role}</p>
        <p className="">{data.description}</p>
        <a
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <LinkedInImage />
        </a>
      </div>
    </section>
  );
}
