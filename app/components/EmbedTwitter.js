"use client";

import Script from "next/script";

export default function EmbedTwitter() {
  return (
    <>
      <div class="sk-ww-twitter-feed" data-embed-id="241650"></div>
      <Script
        src="https://widgets.sociablekit.com/twitter-feed/widget.js"
        async
        defer
      ></Script>
    </>
  );
}
