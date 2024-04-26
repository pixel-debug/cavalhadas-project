import { newsArray } from "@/utils/mockedData/new";
import { Button } from "@/components/common/button";
import { useRouter } from "next/router";
import { usedRouters } from "@/types/routers";
import { Banner } from "@/components/banner";
import { CardDeck } from "@/components/common/cards";
import { Box } from "@/components/common/box";
import { BannerMockedTitle, BannerMockedText } from "@/utils/texts";

export default function Home() {
  const news = newsArray.slice(0, 3);
  const router = useRouter();
  const navigation = () => {
    router.push(usedRouters("noticias"));
  };

  const title = BannerMockedTitle;
  const text = BannerMockedText;
  const image =
    "https://www.ipatrimonio.org/wp-content/uploads/2018/11/ipatrimonio_Ouro-Preto-Cavalhada-_Foto-Ane-Souz-Fonte-Prefeitura-Municipal.jpg";

  return (
    <>
      <Banner
        image={image}
        title={title}
        subtitle={text}
        hasButton
        isMainPage
      />
      <Box title={"Últimas noticias"}>
        <div className="flex flex-col items-center">
          <CardDeck news={news} />
          <div className="xl:w-1/6 w-1/4 mt-10">
            <Button text={"Ver mais"} action={navigation} />
          </div>
        </div>
      </Box>
    </>
  );
}
