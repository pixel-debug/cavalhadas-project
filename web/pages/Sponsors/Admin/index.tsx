import { Box } from "@/components/common/box";
import { FormField, Sponsor } from "@/types/types";
import { DynamicForm } from "@/components/common/form/form";
import { getInput } from "@/types/inputs";
import { useMutation } from "react-query";
import { createSponsor } from "@/external/api/sponsorApi";
import { convertFileToString } from "@/utils/formatters";
import { useContext } from "react";
import { AdminContext } from "@/context/useAdminContext";

const AddSponsor = () => {
  const { admin } = useContext(AdminContext);

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
    if (data.image instanceof FileList) {
      const file = data.image[0];
      const imageData = await convertFileToString(file);
      data.image = imageData;
    }
    const sponsor = {
      ...data,
      authorId: admin ? admin.id : 0,
    };

    mutate(sponsor);
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

export default AddSponsor;
