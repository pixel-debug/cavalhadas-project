import { Button } from "@/components/common/button";
import { Donations } from "@/components/sponsorsPage/donations";
import { Sponsors } from "@/components/sponsorsPage/sponsors";
import { PageTitles, PagesRouters } from "@/types/enums";
import { usedRouters } from "@/types/routers";
import { useRouter } from "next/router";

const SponsorsPage = () => {
  const router = useRouter();
  const navigation = () => {
    router.push(usedRouters(PagesRouters.ADMIN_SPONSOR_PAGE));
  };

  const isAdmin = true;

  return (
    <>
      <p className="py-10 justify-center flex text-blue-900 font-itim text-3xl">
        {PageTitles.SPONSORS}
      </p>
      <Sponsors />
      <Donations />
      {isAdmin ? (
        <div className="flex justify-center mt-4">
          <div className="xl:w-[40%] w-[30%]">
            <Button text={"Adicionar membro"} action={navigation} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SponsorsPage;
