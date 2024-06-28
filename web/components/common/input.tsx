import { InputProps } from "@/types/types";

export const Input = ({
  label,
  id,
  register,
  placeholder,
  type = "text",
  onChange,
  multiple = false,
}: InputProps) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        {...register}
        id={id}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        multiple={multiple}
      />
    </div>
  );
};
