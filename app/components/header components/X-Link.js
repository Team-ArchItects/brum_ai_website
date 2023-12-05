import Image from 'next/image'

export default function XLink() {
    return (
        <a
        href="https://x.com/brum_AI"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/x_white.png"
          width={25}
          height={25}
          alt="X logo linking to the BRUM AI X page"
        />
      </a>
    )
}