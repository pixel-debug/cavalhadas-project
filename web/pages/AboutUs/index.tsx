import { AboutUsIntroText } from "@/components/aboutUs/intro";
import { Box } from "@/components/common/box";
import { Button } from "@/components/common/button";
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
  const { data } = useQuery({
    queryKey: ["member"],
    queryFn: getMembers,
  });

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
      <Box title={"Quem somos"}>
        {data ? <SliderComponent subjects={data} /> : null}
      </Box>
      {admin ? (
        <div className="flex justify-center mt-4">
          <div className="xl:w-[40%] w-[30%]">
            <Button text={"Adicionar membro"} action={navigation} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AboutUsPage;
