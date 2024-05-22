import { ButtonProps } from "@/types/types";

export const Button = ({ text, action, type }: ButtonProps) => {
  const handleClick = () => {
    if (action) {
      action();
    }
  };

  return (
    <button
      type={type}
      className="bg-blue-900 rounded p-2 w-full"
      onClick={handleClick}
    >
      <p className="text-sm lg:text-base text-neutral-50 font-montserrat flex justify-center px-2">
        {text}
      </p>
    </button>
  );
};
