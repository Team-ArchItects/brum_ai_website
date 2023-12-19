import Image from "next/image";

export default function AboutUsMap({ data }) {
  return (
    <section className="grid grid-cols-3 p-4">
      <div className="col-span-1">
        <Image
          src={data.imageUrl}
          alt={`Profile photo of ${data.name}`}
          width={150}
          height={150}
          className="rounded-full aspect-square"
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
          <Image
            src={"/assets/linkedin_icon_white.svg"}
            width={32}
            height={32}
            alt={"linkedin logo"}
          />
        </a>
      </div>
    </section>
  );
}
