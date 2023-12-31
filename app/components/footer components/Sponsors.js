"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function SponsorsList({ data }) {
  const { resolvedTheme } = useTheme();
  let src;
  switch (resolvedTheme) {
    case "light":
      src = data.imageLight;
      break;
    case "dark":
      src = data.imageDark;
      break;
    default:
      src = data.imageLight;
      break;
  }

  return (
    <a href={data.url} target="_blank" rel="noopener noreferrer" className="w-fit">
      <Image src={src} width={150} height={150} alt={`${data.alt}`} />
    </a>
  );
}
