import { Button } from "@/components/common/button";
import { CardDeck } from "@/components/common/cards";
import { PagesRouters } from "@/types/enums";
import { usedRouters } from "@/types/routers";
import { newsArray } from "@/utils/mockedData/new";
import { useRouter } from "next/router";

const NewsPage = () => {
  const router = useRouter();
  const navigation = () => {
    router.push("/Noticias/Admin/");
  };

  const news = newsArray;
  const isAdmin = true;
  return (
    <>
      {isAdmin ? <Button text={"Criar post"} action={navigation} /> : null}
      <div className="flex p-10">
        <CardDeck news={news} />
      </div>
    </>
  );
};

export default NewsPage;
