import Image from "next/image";

export default function SocialsList({data, handleOnClick}) {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleOnClick}
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
