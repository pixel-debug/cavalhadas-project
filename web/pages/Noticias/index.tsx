import { WritePost } from "@/components/admin/post";
import { CardDeck } from "@/components/common/cards";
import { newsArray } from "@/utils/mockedData/new";

const NewsPage = () => {
  const news = newsArray;
  const isAdmin = true;
  return (
    <>
      {isAdmin ? <WritePost /> : null}
      <div className="flex p-10">
        <CardDeck news={news} />
      </div>
    </>
  );
};

export default NewsPage;
