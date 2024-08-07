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
import Head from "next/head";

const NewsDetails = () => {
  const router = useRouter();
  const { newsID } = router.query;

  const [modal, setModal] = useState(false);
  const { admin } = useContext(AdminContext);

  const { data } = useQuery(["posts", newsID], () => getPost(Number(newsID)));

  return (
    <>
      <Head>
        <title>Notícias</title>
        <meta name="description" content="News number" />
      </Head>
      {data && (
        <div className="xl:mt-20 mt-16 flex items-center xl:w-[80%] w-full">
          <Box title="">
            <NewsContent
              selectedNews={data}
              openImage={setModal}
              isAdmin={!!admin}
            />
          </Box>
          {modal && (
            <Modal closeModal={() => setModal(false)}>
              <div className="w-full h-full p-10">
                <CustomImage
                  src={imageSrc(data.image)}
                  alt="image"
                  objectFit="contain"
                />
              </div>
            </Modal>
          )}
        </div>
      )}
    </>
  );
};

export default NewsDetails;
