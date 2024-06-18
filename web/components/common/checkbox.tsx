import { CheckboxProps } from "@/types/types";

export const Checkbox = ({ label, register, id }: CheckboxProps) => {
  return (
    <label className="flex items-center space-x-3 pt-3">
      <input
        type="checkbox"
        id={id}
        {...register}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className="text-gray-900 text-xm xl:text-base">{label}</span>
    </label>
  );
};
