import { Box } from "@/components/common/box";
import { FormField, Sponsor } from "@/types/types";
import { getInput } from "@/types/inputs";
import { useMutation } from "react-query";
import { createSponsor } from "@/external/api/sponsorApi";
import { Form } from "../common/form";
import { IoIosArrowDropleft } from "react-icons/io";
import { useRouter } from "next/router";

export const AddSponsor = () => {
  const router = useRouter();

  const { mutate } = useMutation(createSponsor, {
    onSuccess: (data) => {
      const message = "success";
      alert(message);
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const handleSubmit = async (data: Sponsor) => {
    mutate(data);
  };

  const sponsorFormFields = [
    ...getInput("sponsor"),
    { type: "image", id: "image", name: "image", label: "Imagem" },
  ];

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <IoIosArrowDropleft
        className="absolute top-20 left-10 h-10 w-10"
        onClick={goBack}
      />
      <div className="mt-10 flex items-center">
        <Box title="Preencha as informações do patrocinador">
          <Form<Sponsor> fields={sponsorFormFields} onSubmit={handleSubmit} />
        </Box>
      </div>
    </>
  );
};
