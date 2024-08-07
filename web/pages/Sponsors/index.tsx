import { Button } from "@/components/common/button";
import { NoContent } from "@/components/common/noContent";
import { Donations } from "@/components/sponsorsPage/donations";
import { Sponsors } from "@/components/sponsorsPage/sponsors";
import { AdminContext } from "@/context/useAdminContext";
import { getSponsors } from "@/external/api/sponsorApi";
import { PageTitles, PagesRouters } from "@/types/enums";
import { usedRouters } from "@/types/routers";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useQuery } from "react-query";

const SponsorsPage = () => {
  const router = useRouter();
  const navigation = () => {
    router.push(usedRouters(PagesRouters.ADMIN_SPONSOR_PAGE));
  };
  const { admin } = useContext(AdminContext);
  const { data } = useQuery({
    queryKey: ["sponsor"],
    queryFn: getSponsors,
  });
  const filteredData = data ? data.filter((sponsor) => !sponsor.deleted) : [];

  return (
    <>
      <Head>
        <title>Patrocinadores</title>
        <meta name="description" content="Sponsors" />
      </Head>
      <p className="py-10 justify-center flex text-red-900 font-montserrat font-bold text-3xl">
        {PageTitles.SPONSORS}
      </p>
      <div className="flex flex-col items-center pt-5">
        <div className="px-10">
          <p className="font-montserrat text-neutral-900 text-base pb-20">
            Somos muitos agradecidos à todos os nossos patrocinadores! Essas
            pessoas incríveis que, além de nos apoiar e acreditar, colaboram
            deixando viva nossa cultura!
          </p>

          {filteredData && filteredData.length > 0 ? (
            <Sponsors sponsors={filteredData} />
          ) : (
            <NoContent />
          )}
        </div>
      </div>
      {admin ? (
        <div className="flex justify-center mt-4">
          <Button text={"Gerenciar patrocinador"} action={navigation} />
        </div>
      ) : null}
      <Donations />
    </>
  );
};

export default SponsorsPage;
