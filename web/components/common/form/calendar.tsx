import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { InputProps } from "@/types/types";

export const Calendar = ({ label, id, register, error }: InputProps) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <DatePicker
        showIcon
        key={id}
        selected={startDate}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...register}
        dateFormat="dd/MM/yyyy"
        onChange={(date) => setStartDate(date as Date)}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </>
  );
};
