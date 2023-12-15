"use client";

import { useState } from "react";
import Link from "next/link";
import MenuItems from "./Menu_Items";
import ThemeSwitcher from "@/app/ThemeSwitcher";

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
        className="text-white bg-navy hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center md:hidden"
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

      <div className="w-full hidden md:flex items-center ">
        <Link href="/" className="ml-3 bg-navy text-white ">
          Homepage
        </Link>
        <Link href="/events" className="ml-3 bg-navy text-white">
          Events
        </Link>
        <Link href="/contact" className="ml-3 bg-navy text-white">
          Contact us
        </Link>
      </div>
      <div className="hidden md:inline">
        <ThemeSwitcher />
      </div>

      <div
        id="dropdown"
        className={`z-10 ${dropdown} absolute left-12 top-16 bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-44 md:hidden`}
      >
        <ul
          className="py-2 text-sm text-white"
          aria-labelledby="dropdownDefaultButton"
        >
          {pages.map((menuItems) => {
            return <MenuItems key={menuItems.id} data={menuItems} />;
          })}
          <div className="w-full flex justify-center">
            <ThemeSwitcher />
          </div>
        </ul>
      </div>
    </section>
  );
}
