import { ButtonProps } from "@/types/types";
import Image from "next/image";
import loadingSVG from "../../assets/spinner/loading.svg";
export const Button = ({
  text,
  action,
  type,
  disable,
  loading,
}: ButtonProps) => {
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
      disabled={disable}
    >
      {loading ? (
        <div className="flex justify-center">
          <Image
            src={loadingSVG}
            alt="Loading..."
            width={6}
            height={6}
            className="w-6 h-6 animate-spin"
          />
        </div>
      ) : (
        <p className="text-sm lg:text-base text-neutral-50 font-montserrat flex justify-center px-2">
          {text}
        </p>
      )}
    </button>
  );
};
