import { Input } from "@/components/common/input";
import { InputProps } from "@/types/types";

export const InputField = ({
  label,
  id,
  placeholder,
  register,
  error,
  type,
}: InputProps) => (
  <>
    <Input
      label={label}
      register={register}
      id={id}
      type={type}
      placeholder={placeholder}
    />
    {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
  </>
);
