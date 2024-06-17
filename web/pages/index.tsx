import { Button } from "@/components/common/button";
import { useRouter } from "next/router";
import { usedRouters } from "@/types/routers";
import { Banner } from "@/components/banner";
import { CardDeck } from "@/components/common/cards";
import { Box } from "@/components/common/box";
import { BannerMockedTitle, BannerMockedText } from "@/utils/texts";
import { PagesRouters } from "@/types/enums";
import { getPosts } from "@/external/api/postApi";
import { useQuery } from "react-query";
import image from "../assets/images/home.jpg";

export default function Home() {
  const router = useRouter();
  const navigation = () => {
    router.push(usedRouters(PagesRouters.NEWS_PAGE));
  };

  const title = BannerMockedTitle;
  const text = BannerMockedText;

  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (!data) return;
  const news = data.slice(0, 3);

  return (
    <>
      <Banner
        image={image}
        title={title}
        subtitle={text}
        hasButton
        isMainPage
      />
      <div className="flex items-center">
        <Box title={"Últimas noticias"}>
          <div className="flex flex-col items-center">
            <CardDeck news={news} />
            <div className="xl:w-1/6 w-1/3 mt-10">
              <Button text={"Ver mais"} action={navigation} />
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}
