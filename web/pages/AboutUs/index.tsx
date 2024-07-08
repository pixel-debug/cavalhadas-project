import { AboutUsIntroText } from "@/components/aboutUs/intro";
import { Box } from "@/components/common/box";
import { Button } from "@/components/common/button";
import { NoContent } from "@/components/common/noContent";
import { SliderComponent } from "@/components/common/slider";
import { AdminContext } from "@/context/useAdminContext";
import { getMembers } from "@/external/api/memberApi";
import { PageTitles, PagesRouters } from "@/types/enums";
import { usedRouters } from "@/types/routers";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useQuery } from "react-query";

const AboutUsPage = () => {
  const router = useRouter();
  const navigation = () => {
    router.push(usedRouters(PagesRouters.ADMIN_MEMBER_PAGE));
  };
  const { admin } = useContext(AdminContext);
  const { data } = useQuery(["member"], getMembers);
  const filteredData = data ? data.filter((member) => !member.deleted) : [];

  return (
    <>
      <p className="py-10 justify-center flex text-red-900 font-montserrat font-bold text-3xl">
        {PageTitles.ABOUT_US}
      </p>
      <div className="flex flex-col items-center">
        <div className="px-10">
          <AboutUsIntroText />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {filteredData && filteredData.length > 0 ? (
          <Box title={"Quem somos"}>
            <SliderComponent subjects={filteredData} />
          </Box>
        ) : (
          <NoContent />
        )}
      </div>
      {admin ? (
        <div className="flex justify-center mt-4">
          <Button text={"Adicionar membro"} action={navigation} />
        </div>
      ) : null}
    </>
  );
};

export default AboutUsPage;
