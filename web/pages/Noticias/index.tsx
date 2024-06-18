import { Button } from "@/components/common/button";
import { CardDeck } from "@/components/common/cards";
import { AdminContext } from "@/context/useAdminContext";
import { getPaginatedPosts, getPosts } from "@/external/api/postApi";
import { PagesRouters } from "@/types/enums";
import { usedRouters } from "@/types/routers";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { NoContent } from "@/components/common/noContent";

const NewsPage = () => {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigation = () => {
    router.push(usedRouters(PagesRouters.ADMIN_NEWS_PAGE));
  };
  const { admin } = useContext(AdminContext);
  const { data } = useQuery(
    ["posts", pageNumber],
    () => getPaginatedPosts(pageNumber),
    {
      keepPreviousData: true,
      onSuccess: (fetchedData) => {
        setHasMore(fetchedData.length === 6);
      },
    }
  );

  return (
    <>
      {data && (
        <>
          <div className="flex p-10">
            <CardDeck news={data} />
          </div>
          {data.length > 0 ? (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setPageNumber(pageNumber - 1)}
                disabled={pageNumber === 1}
              >
                <IoMdArrowDropleft />
              </button>
              <button
                onClick={() => setPageNumber(pageNumber + 1)}
                disabled={!hasMore}
              >
                <IoMdArrowDropright />
              </button>
            </div>
          ) : (
            <NoContent />
          )}
        </>
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
