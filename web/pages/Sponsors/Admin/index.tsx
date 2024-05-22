import { Box } from "@/components/common/box";
import { FormField, Sponsor } from "@/types/types";
import { convertFileToString } from "@/utils/convertFileToString";
import { DynamicForm } from "@/components/common/form/form";
import { getInput } from "@/types/inputs";

const AddSponsor = () => {
  const handleSubmit = async (data: Sponsor) => {
    if (data.image instanceof FileList) {
      const file = data.image[0];
      const imageData = await convertFileToString(file);
      data.image = imageData;
    }
    // const post = await createPost({
    //   ...data,
    //   authorId: 1,
    // });
    // if (post) console.log("take back to noticias page");
    // else console.log("no posts");
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
