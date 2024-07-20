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
import useToast from "@/hooks/useToast";
import { useState } from "react";
import { Loading } from "../common/loading";

export const AddMember = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { toastSuccess, toastError } = useToast();

  const { mutate } = useMutation(createMember, {
    onSuccess: (data) => {
      toastSuccess("Membro criado");
    },
    onError: (error) => {
      toastError(error as string);
    },
  });

  const goBack = () => {
    router.back();
  };

  const handleSubmit = async (data: Member) => {
    setLoading(true);

    data.memberSince = new Date(data.memberSince);
    setLoading(false);

    mutate(data);
  };

  const memberFormFields = [
    ...getInput("member"),
    { type: "image", id: "image", name: "image", label: "Imagem" },
  ];

  return (
    <>
      <IoIosArrowDropleft
        className="absolute top-20 left-5 xl:h-10 xl:w-10 h-8 w-8"
        onClick={goBack}
      />
      <div className="xl:mt-20 mt-16 flex items-center xl:w-[80%] w-full">
        <Box title="Preencha as informações do membro">
          <Form<Member> fields={memberFormFields} onSubmit={handleSubmit} />
        </Box>
      </div>
      {loading ? <Loading /> : null}
    </>
  );
};
