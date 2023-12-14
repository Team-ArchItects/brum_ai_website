"use client"

import { useTheme } from "next-themes"
import Script from "next/script";

export default function EmbedTwitter() {

  const {resolvedTheme} = useTheme()
  let src;
  let dataId;
  switch(resolvedTheme) {
    case 'light':
      src = 'https://widgets.sociablekit.com/twitter-feed/widget.js';
      dataId = "242041";
      break;
    case 'dark':
      src = 'https://widgets.sociablekit.com/twitter-feed/widget.js';
      dataId = "241650";
      break;
    default:       
    src = 'https://widgets.sociablekit.com/twitter-feed/widget.js';
    dataId = "241650";
    break;

  }
  return (
    <>
      <div className="sk-ww-twitter-feed" data-embed-id={dataId}></div>
      <Script
        src={src}
        async
        defer
      ></Script>
      <br></br>
    </>
  );
}
