import Image from 'next/image'

export default function MeetupLink() {
  return (
    <a
      href="https://www.meetup.com/brum-ai/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/assets/meetup_white.svg"
        width={25}
        height={25}
        alt="LinkedIn logo linking to the BRUM AI LinkedIn page"
      />
    </a>
  );
}
