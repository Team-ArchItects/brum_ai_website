import Image from "next/image";

export default function SponsorsList({data}) {
  return (
    <picture>
            <source srcSet={data.imageDark} media="(prefers-color-scheme: dark)" />
          <Image
            src={data.imageLight}
            width={100}
            height={100}
            alt={data.alt}
          />
          </picture>
  );
}
