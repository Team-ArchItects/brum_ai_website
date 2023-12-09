"use client";
// export interface InstaItem() { // !TYPESCRIPT
//     permalink: string;
//     mediaURL: String;
// }
import InstaGrid from "./InstaGrid";
import { useState, useEffect } from "react";

const InstaFeed = () => {
  const [instaItems, setInstaItems] = useState([]);

  const userId = process.env.NEXT_PUBLIC_USER_ID;
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_CODE;

  function getInstaData() {
    const fetchMedia = async (id) => {
      const mediaUrl = `https://graph.instagram.com/${id}?access_token=${accessToken}&fields=media_url,permalink`;
      const res = await fetch(mediaUrl);

      const json = await res.json();

      const instaItem = {
        permalink: json.permalink,
        mediaUrl: json.media_url,
      };

      return instaItem;
    };

    const doFetch = async () => {
      if (!userId || !accessToken) {
        console.log("userId or accessToken is undefined: ", {
          userId,
          accessToken,
        });
        return;
      }
      const instaUrl = `https://graph.instagram.com/${userId}/media?access_token=${accessToken}`;
      const res = await fetch(instaUrl);
      const json = (await res.json()).data;
      console.log(json);

      const fetchedItems = [];

      for (let i = 0; i < json.length && i < 9; i++) {
        const item = json[i];
        const itemId = item.id;

        const instaItem = await fetchMedia(itemId);
        fetchedItems.push(instaItem);
      }

      setInstaItems(fetchedItems);
    };

    doFetch();
  }

  useEffect(getInstaData, [userId, accessToken]);
  console.log(instaItems);
  console.log("hi");
  return <InstaGrid items={instaItems} />;
};

export default InstaFeed;
