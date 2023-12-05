import Image from "next/image";

export default function DiscordLink() {
  return (
    <a
      href="https://discord.gg/RJSU67kZcJ"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/assets/discord_white.svg"
        width={25}
        height={25}
        alt="Discord logo linking to the BRUM AI discord group"
      />
    </a>
  );
}
