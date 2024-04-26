import { CustomImage } from "@/components/common/image";
import { Box } from "@/components/common/box";
import { Modal } from "@/components/common/modal";
import { NewsContent } from "@/components/newsPage";
import { CardType } from "@/types/types";
import { newsArray } from "@/utils/mockedData/new";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const NewsDetails = () => {
  const router = useRouter();
  const { newsID } = router.query;
  const [selected, setSelected] = useState<CardType>();
  const [modal, setModal] = useState(false);

  const findNews = useCallback(() => {
    const found = newsArray.find(
      (currentNew) => currentNew.id === Number(newsID)
    );
    setSelected(found);
  }, [newsID]);

  useEffect(() => {
    findNews();
  }, [findNews]);

  return (
    selected && (
      <div className="overflow-auto">
        <Box title="">
          <NewsContent selectedNews={selected} openImage={setModal} />
        </Box>
        {modal && (
          <Modal closeModal={() => setModal(false)}>
            <div className="w-full h-full p-10">
              <CustomImage
                src={selected.image}
                alt={"image"}
                objectFit="contain"
              />
            </div>
          </Modal>
        )}
      </div>
    )
  );
};

export default NewsDetails;
