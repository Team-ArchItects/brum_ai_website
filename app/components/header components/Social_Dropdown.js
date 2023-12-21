"use client";

import { useRef, useState } from "react";
import SocialsList from "./Socials";

export default function SocialDropdown({ data }) {
  const [dropdown, setDropdown] = useState(false);
  const menuRef = useRef();
  const dropdownRef = useRef();

  function handleOnClick() {
    setDropdown(prev => !prev)
  };

  if(typeof window !== 'undefined') {
    window.addEventListener('click', (e) => {
      if(e.target !== dropdownRef.current && e.target !== menuRef.current){
        setDropdown(false);
      };
    });
  };

  return (
    <section className="flex">
      <button
        onClick={() => handleOnClick()}
        ref={menuRef}
        id="socialDropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-navy hover:bg-gray-700 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:bg-navy md:hidden"
        type="button"
      >
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
        <span className="text-navy hover:bg-grey-700">_</span>Socials
      </button>

      {dropdown && (<div
      ref={dropdownRef}
        id="dropdown"
        className={`z-10 ${dropdown} absolute right-4 top-16 bg-gray-700 divide-y divide-gray-100 rounded-lg shadow w-20 flex justify-end items-center flex-col md:hidden`}
      >
        <ul
          className="py-2 text-sm text-gray-700 space-x-4"
          aria-labelledby="socialDropdownDefaultButton"
        >
          {data.map((socialsList) => {
            return <SocialsList key={socialsList.id} data={socialsList} handleOnClick={handleOnClick} />;
          })}
        </ul>
      </div>)}
    </section>
  );
}
