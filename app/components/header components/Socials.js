import Image from "next/image";

export default function SocialsList({data}) {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={data.imageDark}
        width={25}
        height={25}
        alt={data.alt}
      />
    </a>
  );
}
