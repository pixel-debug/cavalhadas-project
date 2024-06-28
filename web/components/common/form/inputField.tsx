import { Input } from "@/components/common/input";
import { InputProps } from "@/types/types";

export const InputField = ({
  label,
  id,
  placeholder,
  register,
  error,
  type,
  multiple,
}: InputProps) => (
  <>
    <Input
      label={label}
      register={register}
      id={id}
      type={type}
      placeholder={placeholder}
      multiple={multiple}
    />
    {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
  </>
);
