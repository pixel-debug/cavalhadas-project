import { CustomImage } from "@/components/common/image";
import { Box } from "@/components/common/box";
import { Modal } from "@/components/common/modal";
import { NewsContent } from "@/components/newsPage";
import { Post } from "@/types/types";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AdminContext } from "@/context/useAdminContext";
import { useQuery } from "react-query";
import { getPost } from "@/external/api/postApi";
import { imageSrc } from "@/utils/formatters";

const NewsDetails = () => {
  const router = useRouter();
  const { newsID } = router.query;
  const [selected, setSelected] = useState<Post>();
  const [modal, setModal] = useState(false);
  const { admin } = useContext(AdminContext);

  const { data } = useQuery(["posts", newsID], () => getPost(Number(newsID)));

  useEffect(() => {
    if (!data) return;
    setSelected(data);
  }, [newsID]);

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
                src={imageSrc(selected.image)}
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
