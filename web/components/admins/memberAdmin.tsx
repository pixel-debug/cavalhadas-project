import { Box } from "@/components/common/box";
import { FormField, Member } from "@/types/types";
import { DynamicForm } from "@/components/common/form/form";
import { getInput } from "@/types/inputs";
import { useMutation } from "react-query";
import { createMember } from "@/external/api/memberApi";
import { Form } from "../common/form";
import { formatDate } from "@/utils/formatters";
import { useRouter } from "next/router";
import { IoIosArrowDropleft } from "react-icons/io";

export const AddMember = () => {
  const router = useRouter();
  const { mutate } = useMutation(createMember, {
    onSuccess: (data) => {
      const message = "success";
      alert(message);
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const goBack = () => {
    router.back();
  };

  const handleSubmit = async (data: Member) => {
    data.memberSince = new Date(data.memberSince);
    mutate(data);
  };

  const memberFormFields = [
    ...getInput("member"),
    { type: "image", id: "image", name: "image", label: "Imagem" },
  ];

  return (
    <>
      <IoIosArrowDropleft
        className="absolute top-20 left-10 h-10 w-10"
        onClick={goBack}
      />
      <div className="mt-10 flex items-center">
        <Box title="Preencha as informações do membro">
          <Form<Member> fields={memberFormFields} onSubmit={handleSubmit} />
        </Box>
      </div>
    </>
  );
};
