"use client";
import Script from "next/script";

export default function EmbedLinkedIn() {
  return (
    <>
      <div class="sk-ww-linkedin-page-post" data-embed-id="241645"></div>
      <Script
        src="https://widgets.sociablekit.com/linkedin-page-posts/widget.js"
        async
        defer
      ></Script>
      <br />
    </>
  );
}
