"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import MenuItems from "./Menu_Items";
import ThemeSwitcher from "@/app/ThemeSwitcher";

export default function Dropdown({ pages }) {
  const [dropdown, setDropdown] = useState(false);
  const menuRef = useRef();
  const dropdownRef = useRef();

  // const view = dropdown ? "block" : "hidden";

  function handleOnClick() {
    setDropdown((prev) => !prev);
  }

  if(typeof window !== 'undefined') {
    window.addEventListener('click', (e) => {
      if(e.target !== dropdownRef.current && e.target !== menuRef.current){
        setDropdown(false);
      };
    });
  };

  return (
    <section className=" flex w-full">
      <div>
        <button
          onClick={() => handleOnClick()}
          ref={menuRef}
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-navy hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ms:hidden"
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
        {dropdown && (<div
          ref={dropdownRef}
          id="dropdown"
          className={`z-10 absolute left-3 top-16 bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-36 ms:hidden`}
        >
          <ul
            className="py-2 text-sm text-white"
            aria-labelledby="dropdownDefaultButton"
          >
            {pages.map((menuItems) => {
              return <MenuItems key={menuItems.id} data={menuItems} handleOnClick={handleOnClick} />;
            })}
            <div className="w-full flex justify-center">
              <ThemeSwitcher />
            </div>
          </ul>
        </div>)}
      </div>

      <div className="w-full hidden ms:flex items-center ">
        <Link href="/" className="ml-3 bg-navy text-white ">
          Homepage
        </Link>
        <Link href="/events" className="ml-3 bg-navy text-white">
          Events
        </Link>
        <Link href="/aboutus" className="ml-3 bg-navy text-white">
          About
        </Link>
        <Link href="/contact" className="ml-3 bg-navy text-white">
          Contact
        </Link>
        <ThemeSwitcher />
      </div>
    </section>
  );
}
