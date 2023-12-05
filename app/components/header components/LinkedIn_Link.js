import Image from "next/image";

export default function LinkedInLink() {
  return (
    <a
      href="https://www.linkedin.com/company/brumai/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/assets/linkedin_icon_white.svg"
        width={25}
        height={25}
        alt="meetup logo linking to the BRUM AI meetup page"
      />
    </a>
  );
}
