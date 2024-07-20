import { InputProps } from "@/types/types";
import { useState } from "react";

export const Toggle = ({ label, id, register, error }: InputProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex py-3">
      <span className="text-neutral-700 text-xm xl:text-base mr-2">
        Amazonas
      </span>
      <label className="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
        <input type="checkbox" id={id} {...register} className="hidden" />
        <div
          className={`border border-2 block xl:w-10 w-8 h-5 xl:h-6 bg-blue-500 rounded-full cursor-pointer ${
            checked ? "bg-red-500" : ""
          }`}
          onClick={handleChange}
        >
          <span
            className={`block xl:h-5 xl:w-5 h-4 w-4 rounded-full bg-white shadow-md transform transition duration-200 ease-in ${
              checked ? "translate-x-4" : ""
            }`}
          ></span>
        </div>
      </label>
      <span className="text-neutral-700 text-xm xl:text-base">Cavaleiro</span>
    </div>
  );
};
