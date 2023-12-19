"use client"

import { useTheme } from "next-themes";
import Image from "next/image";


export default function LinkedInImage () {
    const { resolvedTheme } = useTheme();

    let src;
    switch (resolvedTheme) {
      case "light":
        src = "/assets/linkedin_icon_black.svg";
        break;
      case "dark":
        src = "/assets/linkedin_icon_white.svg";
        break;
      default:
        src = "/assets/linkedin_icon_black.svg";
        break;
    };

    return(
        <Image
        src={src}
        width={32}
        height={32}
        alt={"linkedin logo"}
      />
    )
}