import { Button } from "@/components/common/button";
import { CardDeck } from "@/components/common/cards";
import { AdminContext } from "@/context/useAdminContext";
import { getPosts } from "@/external/api/postApi";
import { PagesRouters } from "@/types/enums";
import { usedRouters } from "@/types/routers";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useQuery } from "react-query";

const NewsPage = () => {
  const router = useRouter();
  const navigation = () => {
    router.push(usedRouters(PagesRouters.ADMIN_NEWS_PAGE));
  };
  const { admin } = useContext(AdminContext);
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <>
      {data && (
        <div className="flex p-10">
          <CardDeck news={data} />
        </div>
      )}

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
