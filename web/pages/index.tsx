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
import { NoContent } from "@/components/common/noContent";
import { useContext } from "react";
import { AdminContext } from "@/context/useAdminContext";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  const navigation = () => {
    router.push(usedRouters(PagesRouters.NEWS_PAGE));
  };
  const { admin } = useContext(AdminContext);
  const title = BannerMockedTitle;
  const text = BannerMockedText;

  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const news = data ? data.slice(0, 3) : [];

  return (
    <>
      <Head>
        <title>Cavalhadas Amarantina</title>
        <meta name="description" content="Cavalhadas Amarantina" />
      </Head>
      <Banner title={title} subtitle={text} hasButton isMainPage />
      <div className="flex items-center justify-center">
        {news.length > 0 ? (
          <Box title={"Últimas noticias"}>
            <div className="flex flex-col items-center">
              <CardDeck news={news} showDeleteIcon={admin ? true : false} />
              <div className="xl:w-1/6 w-1/3 mt-10">
                <Button text={"Ver mais"} action={navigation} />
              </div>
            </div>
          </Box>
        ) : (
          <NoContent />
        )}
      </div>
    </>
  );
}
