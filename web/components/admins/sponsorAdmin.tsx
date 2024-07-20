import { Box } from "@/components/common/box";
import { FormField, Sponsor } from "@/types/types";
import { getInput } from "@/types/inputs";
import { useMutation } from "react-query";
import { createSponsor } from "@/external/api/sponsorApi";
import { Form } from "../common/form";
import { IoIosArrowDropleft } from "react-icons/io";
import { useRouter } from "next/router";
import { useState } from "react";
import { Loading } from "../common/loading";
import useToast from "@/hooks/useToast";

export const AddSponsor = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { toastSuccess, toastError } = useToast();

  const { mutate } = useMutation(createSponsor, {
    onSuccess: () => {
      toastSuccess("Patrocinador criado");
    },
    onError: (error) => {
      toastError(error as string);
    },
  });

  const handleSubmit = async (data: Sponsor) => {
    setLoading(true);

    mutate(data);
    setLoading(false);
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
        className="absolute top-20 left-5 xl:h-10 xl:w-10 h-8 w-8"
        onClick={goBack}
      />
      <div className="xl:mt-20 mt-0 flex items-center xl:w-[80%] w-full">
        <Box title="Preencha as informações do patrocinador">
          <Form<Sponsor> fields={sponsorFormFields} onSubmit={handleSubmit} />
        </Box>
      </div>
      {loading ? <Loading /> : null}
    </>
  );
};
