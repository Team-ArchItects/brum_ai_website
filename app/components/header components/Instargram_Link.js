import Image from "next/image";

export default function InstagramLink() {
    return(
        <a
        href="https://www.instagram.com/brum_ai_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/instagram_icon_white.svg"
          width={25}
          height={25}
          alt="Instagram logo linking to the BRUM AI instagram page"
        />
      </a>
    )
}