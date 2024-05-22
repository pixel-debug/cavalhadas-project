import { Button } from "@/components/common/button";
import { CardDeck } from "@/components/common/cards";
import { AdminContext } from "@/context/useAdminContext";
import { PagesRouters } from "@/types/enums";
import { usedRouters } from "@/types/routers";
import { newsArray } from "@/utils/mockedData/new";
import { useRouter } from "next/router";
import { useContext } from "react";

const NewsPage = () => {
  const router = useRouter();
  const navigation = () => {
    router.push(usedRouters(PagesRouters.ADMIN_NEWS_PAGE));
  };

  const news = newsArray;
  const { admin } = useContext(AdminContext);
  return (
    <>
      <div className="flex p-10">
        <CardDeck news={news} />
      </div>
      {admin ? (
        <div className="flex justify-center mt-4">
          <div className="xl:w-[40%] w-[30%]">
            <Button text={"Criar post"} action={navigation} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NewsPage;
