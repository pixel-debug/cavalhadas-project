import { InputProps } from "@/types/types";

export const TextArea = ({ label, id, register, placeholder }: InputProps) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        {...register}
        id={id}
        className="xl:h-[40vh] h-[50vh] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
      />
    </div>
  );
};
