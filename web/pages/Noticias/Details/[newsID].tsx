import { CustomImage } from "@/components/common/image";
import { Box } from "@/components/common/box";
import { Modal } from "@/components/common/modal";
import { NewsContent } from "@/components/newsPage";
import { CardType } from "@/types/types";
import { newsArray } from "@/utils/mockedData/new";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { isAbsolute } from "path";
import { AdminContext } from "@/context/useAdminContext";

const NewsDetails = () => {
  const router = useRouter();
  const { newsID } = router.query;
  const [selected, setSelected] = useState<CardType>();
  const [modal, setModal] = useState(false);
  const { admin } = useContext(AdminContext);

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
      <div className="overflow-auto pt-10">
        <Box title="">
          <NewsContent
            selectedNews={selected}
            openImage={setModal}
            isAdmin={admin ? true : false}
          />
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
