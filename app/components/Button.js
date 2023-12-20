import Image from "next/image";
import Link from "next/link";

const Button = ({ text, location }) => {
  return (
    <Link href={`${location}`}>
      <button className="rounded-full flex flex-wrap p-2 border-4 border-citrus min-w-[150px] bg-black text-white dark:bg-white dark:text-black justify-evenly transition-all hover:bg-navy hover:dark:bg-zinc-200 hover:scale-105">
        {`${text}`}
        <Image
          src="/assets/arrow.png"
          width="20"
          height="20"
          alt="Arrow"
          className="ml-2 mt-1"
        />
      </button>
    </Link>
  );
};

export default Button;
