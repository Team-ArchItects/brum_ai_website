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
    <a href={data.url} target="_blank" rel="noopener noreferrer">
      <Image src={src} width={100} height={100} alt={`${data.alt}`} />
    </a>
  );
}
