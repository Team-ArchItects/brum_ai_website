"use client"

import { useTheme } from "next-themes"
import Script from "next/script";

export default function EmbedLinkedIn() {

  const {resolvedTheme} = useTheme()
  let src;
  let dataId;
  switch(resolvedTheme) {
    case 'light':
      src = 'https://widgets.sociablekit.com/linkedin-page-posts/widget.js';
      dataId = "242040";
      break;
    case 'dark':
      src = 'https://widgets.sociablekit.com/linkedin-page-posts/widget.js';
      dataId = "241645";
      break;
    default:       
    src = 'https://widgets.sociablekit.com/linkedin-page-posts/widget.js';
    dataId = "241645";
    break;

  }
  return (
    <>
      <div className="sk-ww-linkedin-page-post" data-embed-id={dataId}></div>
      <Script
        src={src}
        async
        defer
      ></Script>
      <br />
    </>
  );
}
