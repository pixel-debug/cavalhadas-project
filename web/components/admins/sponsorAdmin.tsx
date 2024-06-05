import { Box } from "@/components/common/box";
import { FormField, Sponsor } from "@/types/types";
import { DynamicForm } from "@/components/common/form/form";
import { getInput } from "@/types/inputs";
import { useMutation } from "react-query";
import { createSponsor } from "@/external/api/sponsorApi";

export const AddSponsor = () => {
  const { mutate } = useMutation(createSponsor, {
    onSuccess: (data) => {
      console.log(data);
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

  const sponsorFormFields: FormField[] = [
    ...getInput("sponsor").map((input) => ({
      ...input,
      type: "input" as const,
    })),
    { type: "image", id: "image", name: "image", label: "Imagem" },
  ];

  return (
    <div className="mt-10">
      <Box title="Preencha as informações do patrocinador">
        <DynamicForm<Sponsor>
          fields={sponsorFormFields}
          onSubmit={handleSubmit}
        />
      </Box>
    </div>
  );
};
