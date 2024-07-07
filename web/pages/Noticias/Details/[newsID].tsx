import { CustomImage } from "@/components/common/image";
import { Box } from "@/components/common/box";
import { Modal } from "@/components/common/modal";
import { NewsContent } from "@/components/newsPage";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AdminContext } from "@/context/useAdminContext";
import { useQuery } from "react-query";
import { getPost } from "@/external/api/postApi";
import { imageSrc } from "@/utils/formatters";

const NewsDetails = () => {
  const router = useRouter();
  const { newsID } = router.query;

  const [modal, setModal] = useState(false);
  const { admin } = useContext(AdminContext);

  const { data } = useQuery(["posts", newsID], () => getPost(Number(newsID)));
  console.log(data);
  return (
    data && (
      <div className="overflow-auto pt-10 w-full h-full">
        <div className="flex items-center">
          <Box title="">
            <NewsContent
              selectedNews={data}
              openImage={setModal}
              isAdmin={admin ? true : false}
            />
          </Box>
        </div>
        {modal && (
          <Modal closeModal={() => setModal(false)}>
            <div className="w-full h-full p-10">
              <CustomImage
                src={imageSrc(data.image)}
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
