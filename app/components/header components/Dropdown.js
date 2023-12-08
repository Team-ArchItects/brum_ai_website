"use client";
import { useState } from "react";
// import Link from "next/link";
import MenuItems from "./Menu_Items";

export default function Dropdown({ pages }) {
  const [dropdown, setDropdown] = useState("hidden");
  function handleOnClick() {
    dropdown === "hidden" ? setDropdown("block") : setDropdown("hidden");
  }
  return (
    <section className=" flex w-full">
      <button
        onClick={() => handleOnClick()}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-navy hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-navy md:hidden"
        type="button"
      >
        Menu{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div className="w-full hidden md:inline">
        <button className="ml-4 ">Homepage</button>
        <button className="ml-4 ">Events</button>
        <button className="ml-4 ">Contact us</button>
      </div>

      <div
        id="dropdown"
        className={`z-10 ${dropdown} absolute left-12 top-16 bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-44`}
      >
        {/* <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
      </li>
      <li>
        <Link href="/events" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Events</Link>
      </li>
      <li>
        <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact Us</Link>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul> */}
        <ul
          className="py-2 text-sm text-white"
          aria-labelledby="dropdownDefaultButton"
        >
          {pages.map((menuItems) => {
            return <MenuItems key={menuItems.id} data={menuItems} />;
          })}
        </ul>
      </div>
    </section>
  );
}
