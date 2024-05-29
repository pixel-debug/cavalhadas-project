import { Box } from "@/components/common/box";
import { FormField, Member } from "@/types/types";
import { DynamicForm } from "@/components/common/form/form";
import { getInput } from "@/types/inputs";
import { AdminContext } from "@/context/useAdminContext";
import { convertFileToString, dateToString } from "@/utils/formatters";
import { useContext } from "react";
import { useMutation } from "react-query";
import { createMember } from "@/external/api/memberApi";

const AddMember = () => {
  const { admin } = useContext(AdminContext);

  const { mutate } = useMutation(createMember, {
    onSuccess: (data) => {
      console.log(data);
      const message = "success";
      alert(message);
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const handleSubmit = async (data: Member) => {
    if (data.image instanceof FileList) {
      const file = data.image[0];
      const imageData = await convertFileToString(file);
      data.image = imageData;
      data.memberSince = dateToString(data.memberSince);
      console.log(data.memberSince);
    }
    const member = {
      ...data,
      authorId: admin ? admin.id : 0,
    };

    mutate(member);
  };

  const memberFormFields: FormField[] = [
    ...getInput("member").map((input) => ({
      ...input,
      type: "input" as const,
    })),
    ...getInput("memberCheckbox").map((input) => ({
      ...input,
      type: "checkbox" as const,
    })),
    { type: "image", id: "image", name: "image", label: "Imagem" },
  ];

  return (
    <div className="mt-10">
      <Box title="Preencha as informações do membro">
        <DynamicForm<Member>
          fields={memberFormFields}
          onSubmit={handleSubmit}
        />
      </Box>
    </div>
  );
};

export default AddMember;
