import { Box } from "@/components/common/box";
import { FormField, Sponsor } from "@/types/types";
import { getInput } from "@/types/inputs";
import { useMutation } from "react-query";
import { createSponsor } from "@/external/api/sponsorApi";
import { Form } from "../common/form";

export const AddSponsor = () => {
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

  return (
    <div className="mt-10 flex items-center">
      <Box title="Preencha as informações do patrocinador">
        <Form<Sponsor> fields={sponsorFormFields} onSubmit={handleSubmit} />
      </Box>
    </div>
  );
};
