"use client"
import { useTheme } from "next-themes";
import Image from "next/image";


export default function FooterGraffiti () {
    const {resolvedTheme} = useTheme()
    let src;
    switch (resolvedTheme) {
        case 'light': 
            src='/assets/cropped_footer_black.png';
            break;
        case 'dark':
            src='/assets/cropped_footer_white.png';
            break;
        default:
            src='/assets/cropped_footer_white.png';
            break;
    }

    return (
        <div className=" flex z-0">
        <Image
          src={src}
          alt="Footer graffiti"
          width={1800}
          height={100}
          className="h-40 w-6/12 scale-x-[-1]"
        />
        <Image
          src={src}
          alt="Footer graffiti"
          width={2000}
          height={160}
          className="w-6/12 h-40 ml-[-1px]"
        />
      </div>
    )
}