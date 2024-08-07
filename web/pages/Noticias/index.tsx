import { Button } from "@/components/common/button";
import { CardDeck } from "@/components/common/cards";
import { AdminContext } from "@/context/useAdminContext";
import { getPaginatedPosts } from "@/external/api/postApi";
import { PagesRouters } from "@/types/enums";
import { usedRouters } from "@/types/routers";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { NoContent } from "@/components/common/noContent";
import { PaginationButtons } from "../../components/newsPage/paginationButtons";
import { Post } from "@/types/types";
import Head from "next/head";

const NewsPage = () => {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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

  const [filteredData, setFilteredData] = useState<Post[]>([]);

  useEffect(() => {
    if (data) {
      setFilteredData(data.filter((post) => !post.deleted));
    }
  }, [data]);

  const navigation = () => {
    router.push(usedRouters(PagesRouters.ADMIN_NEWS_PAGE));
  };

  const { admin } = useContext(AdminContext);

  return (
    <>
      <Head>
        <title>Notícias</title>
        <meta name="description" content="News" />
      </Head>
      {filteredData.length > 0 ? (
        <>
          <div className="flex p-10">
            <CardDeck news={filteredData} showDeleteIcon={!!admin} />
          </div>
          <PaginationButtons
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            hasMore={hasMore}
          />
        </>
      ) : (
        <div className="mt-10">
          <NoContent />
        </div>
      )}

      {admin && (
        <div className="flex w-[20%] justify-center mt-4">
          <Button text={"Criar post"} action={navigation} />
        </div>
      )}
    </>
  );
};

export default NewsPage;
