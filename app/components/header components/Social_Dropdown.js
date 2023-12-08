"use client";
import { useState } from "react";
import SocialsList from "./header components/Socials";

export default function SocialDropdown({ data }) {
  const [dropdown, setDropdown] = useState("hidden");
  function handleOnClick() {
    dropdown === "hidden" ? setDropdown("block") : setDropdown("hidden");
  }
  return (
    <section className=" flex">
      <button
        onClick={() => handleOnClick()}
        id="socialDropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-white bg-navy hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-navy md:hidden"
        type="button"
      >
        Socials{" "}
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

      <div
        id="dropdown"
        className={`z-10 ${dropdown} absolute right-12 top-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="socialDropdownDefaultButton"
        >
         {data.map((socialsList) => {
          return <SocialsList key={socialsList.id} data={socialsList} />
        })}
        </ul>
      </div>
    </section>
  );
}