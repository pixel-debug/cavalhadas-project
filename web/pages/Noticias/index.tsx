import { CardDeck } from "@/components/common/cards";
import { newsArray } from "@/utils/mockedData/new";

const NewsPage = () => {
  const news = newsArray;

  return (
    <div className="flex p-10">
      <CardDeck news={news} />
    </div>
  );
};

export default NewsPage;
