import { Banner } from "@/components/banner";
import { Box } from "@/components/common/box";
import { CustomImage } from "@/components/common/image";
import { Donations } from "@/components/sponsorsPage/donations";
import { Sponsors } from "@/components/sponsorsPage/sponsors";
import { newsArray } from "@/utils/mockedData/new";

const SponsorsPage = () => {
  const image =
    "https://www.ipatrimonio.org/wp-content/uploads/2018/11/ipatrimonio_Ouro-Preto-Cavalhada-_Foto-Ane-Souz-Fonte-Prefeitura-Municipal.jpg";

  return (
    <>
      <p className="py-10 justify-center flex text-blue-900 font-itim text-3xl">
        Patrocinadores
      </p>
      <Sponsors />
      <Donations />
    </>
  );
};

export default SponsorsPage;
