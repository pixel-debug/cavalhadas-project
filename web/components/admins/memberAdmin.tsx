import { Box } from "@/components/common/box";
import { FormField, Member } from "@/types/types";
import { DynamicForm } from "@/components/common/form/form";
import { getInput } from "@/types/inputs";
import { useMutation } from "react-query";
import { createMember } from "@/external/api/memberApi";
import { Form } from "../common/form";
import { formatDate } from "@/utils/formatters";

export const AddMember = () => {
  const { mutate } = useMutation(createMember, {
    onSuccess: (data) => {
      const message = "success";
      alert(message);
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const handleSubmit = async (data: Member) => {
    data.memberSince = new Date(data.memberSince);
    mutate(data);
  };

  const memberFormFields = [
    ...getInput("member"),
    { type: "image", id: "image", name: "image", label: "Imagem" },
  ];

  return (
    <div className="mt-10 flex items-center">
      <Box title="Preencha as informações do membro">
        <Form<Member> fields={memberFormFields} onSubmit={handleSubmit} />
      </Box>
    </div>
  );
};
