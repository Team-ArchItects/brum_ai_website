import Link from "next/link";

export default function MenuItems({data, handleOnClick}) {
    return (
        <li onClick={() => handleOnClick()}>
        <Link href={data.link} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{data.label}</Link>
      </li>
    );
  }
  