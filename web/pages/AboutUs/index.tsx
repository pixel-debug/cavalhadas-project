import { AboutUsIntroText } from "@/components/aboutUs/intro";
import { Box } from "@/components/common/box";
import { SliderComponent } from "@/components/common/slider";
import { Banner } from "@/components/banner";

const AboutUsPage = () => {
  const image =
    "https://www.ipatrimonio.org/wp-content/uploads/2018/11/ipatrimonio_Ouro-Preto-Cavalhada-_Foto-Ane-Souz-Fonte-Prefeitura-Municipal.jpg";
  return (
    <>
      <Banner
        title={"-Cavalhadas Amarantina-"}
        subtitle={"Associação dos Cavalheiros Mestre Nico"}
        image={image}
      />

      <AboutUsIntroText />
      <Box title={"Quem somos"}>
        <SliderComponent
          subjects={[
            {
              id: 1,
              name: "",
              role: "",
              image:
                "https://www.ipatrimonio.org/wp-content/uploads/2018/11/ipatrimonio_Ouro-Preto-Cavalhada-_Foto-Ane-Souz-Fonte-Prefeitura-Municipal.jpg",
            },
            {
              id: 1,
              name: "",
              role: "",
              image:
                "https://www.ipatrimonio.org/wp-content/uploads/2018/11/ipatrimonio_Ouro-Preto-Cavalhada-_Foto-Ane-Souz-Fonte-Prefeitura-Municipal.jpg",
            },
            {
              id: 1,
              name: "",
              role: "",
              image: "",
            },
          ]}
        />
      </Box>
    </>
  );
};

export default AboutUsPage;
