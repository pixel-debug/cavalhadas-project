import { Member } from "@/types/types";
import { Box } from "../box";
import { removeMember, updateMember } from "@/external/api/memberApi";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { deleteImageFromFirebase } from "@/external/firebase/firebaseImageURL";

type ItemActionProps = {
  item: Member;
  onClose: () => void;
};
export const ItemAction = ({ item, onClose }: ItemActionProps) => {
  const { handleSubmit, setValue } = useForm<Member>({
    defaultValues: {
      name: item?.name,
      role: item?.role,
    },
  });

  const { mutate } = useMutation(
    (updatedMember: Member) => updateMember(item.id, { ...updatedMember }),
    {
      onSuccess: () => {
        alert("Membro editado com sucesso");
        onClose();
      },
      onError: (error) => {
        alert("houve um erro");
      },
    }
  );

  const onSubmit = (data: Member) => {
    mutate(data);
  };

  const handleDelete = async () => {
    const result = await deleteImageFromFirebase(item.image as string);
    if (result) {
      await removeMember(item.id);
      alert("Membro editado com sucesso");
      onClose();
    }
  };

  const handleChange = (
    event: React.FocusEvent<HTMLParagraphElement>,
    field: keyof Member
  ) => {
    const newValue = event.target.textContent || "";
    setValue(field, newValue);
  };

  return (
    <>
      <Box>
        <IoMdCloseCircleOutline
          className="absolute top-0 w-5 h-5 right-0 text-neutral-50"
          onClick={onClose}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <p
            className="my-5 font-montserrat text-xm xl:text-md text-neutral-900 border border-neutral-900 p-2"
            onBlur={(e) => handleChange(e, "name")}
            suppressContentEditableWarning={true}
            contentEditable
          >
            {item.name}
          </p>

          <p
            className="font-montserrat text-xm xl:text-md text-neutral-900 border border-neutral-900 p-2"
            onBlur={(e) => handleChange(e, "role")}
            suppressContentEditableWarning={true}
            contentEditable
          >
            {item.role}
          </p>

          <div className="flex flex-row justify-around mt-5">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
            >
              Salvar edição
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
            >
              Deletar membro
            </button>
          </div>
        </form>
      </Box>
    </>
  );
};
