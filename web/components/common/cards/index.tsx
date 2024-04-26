import { DeckCardProps, CardType } from "@/types/types";
import { Card } from "./card";
import { useRouter } from "next/router";
import { usedRouters } from "@/types/routers";

export const CardDeck = ({ news }: DeckCardProps) => {
  const router = useRouter();
  const navigation = (path: number) => {
    router.push(usedRouters("noticias-details", path));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 xl:gap-10 gap-5 w-full">
        {news.map((noticia: CardType, index: number) => (
          <div key={index}>
            <Card news={noticia} navigation={navigation} />
          </div>
        ))}
      </div>
    </div>
  );
};
