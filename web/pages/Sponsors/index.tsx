import { Banner } from "@/components/banner";
import { CustomImage } from "@/components/common/image";
import { newsArray } from "@/utils/mockedData/new";

const SponsorsPage = () => {
  const image =
    "https://www.ipatrimonio.org/wp-content/uploads/2018/11/ipatrimonio_Ouro-Preto-Cavalhada-_Foto-Ane-Souz-Fonte-Prefeitura-Municipal.jpg";

  return (
    <>
      <Banner title={"Patrocinadores de 2024"} subtitle={""} image={image} />
      <div className="flex flex-col items-center  pt-5">
        <div className=" w-[80%]">
          <p className="font-itim text-neutral-900 text-base pb-20">
            Somos muitos agradecidos à todos os nossos patrocinadores! Essas
            pessoas incríveis que, além de nos apoiar e acreditar, colaboram
            deixando viva nossa cultura!
          </p>
          <div className="grid grid-cols-3 xl:gap-20 gap-5 w-full">
            {newsArray.map((item: any, index: number) => (
              <div className="h-[40vh]" key={index}>
                <CustomImage
                  key={item.id}
                  src={item.image}
                  alt={item.alt}
                  rounded
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorsPage;
