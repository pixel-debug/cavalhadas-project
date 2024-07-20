import { DeckCardProps, Post } from "@/types/types";
import { Card } from "./card";
import { useRouter } from "next/router";
import { usedRouters } from "@/types/routers";
import { PagesRouters } from "@/types/enums";
import { removePost } from "@/external/api/postApi";
import { useState } from "react";

export const CardDeck = ({ news, showDeleteIcon }: DeckCardProps) => {
  const [newsState, setNewsState] = useState(news);
  const router = useRouter();
  const navigation = (path: number) => {
    router.push(usedRouters(PagesRouters.NEWS_PAGE_DETAILS, path));
  };

  const deletePost = async (post: Post) => {
    // const result = await deleteImageFromFirebase(post.image as string);
    // if (result) {
    await removePost(post.id);
    setNewsState(newsState.filter((item) => item.id !== post.id));
    // }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 xl:gap-10 gap-5 w-full">
        {newsState.map((noticia: Post, index: number) => (
          <div key={index}>
            <Card
              showDeleteIcon={showDeleteIcon}
              news={noticia}
              navigation={navigation}
              deletePost={deletePost}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
