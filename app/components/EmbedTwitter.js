"use client";

import Script from "next/script";

export default function EmbedTwitter() {
  return (
    <section className="w-full sm:w-11/12 md:w-9/12 2xl:w-8/12">
      <div className="sk-ww-twitter-feed" data-embed-id="241650"></div>
      <Script
        src="https://widgets.sociablekit.com/twitter-feed/widget.js"
        async
        defer
      ></Script>
    </section>
  );
}
