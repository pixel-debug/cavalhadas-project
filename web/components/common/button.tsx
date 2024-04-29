import { ButtonProps } from "@/types/types";

export const Button = ({ text, action }: ButtonProps) => {
  return (
    <div className="bg-blue-900 rounded p-2" onClick={action}>
      <p className="text-sm lg:text-base text-neutral-50 font-itim flex justify-center px-2">
        {text}
      </p>
    </div>
  );
};
