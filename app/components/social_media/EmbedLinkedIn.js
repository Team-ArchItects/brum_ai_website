"use client";
import Script from "next/script";

export default function EmbedLinkedIn() {
  return (
    <section className="w-full sm:w-11/12 md:w-9/12 2xl:w-8/12">
      <div className="sk-ww-linkedin-page-post" data-embed-id="241645"></div>
      <Script
        src="https://widgets.sociablekit.com/linkedin-page-posts/widget.js"
        async
        defer
      ></Script>
      <br />
    </section>
  );
}
