import { BoxProps } from "@/types/types";

export const Box = ({ children, title }: BoxProps) => {
  return (
    <div className="flex flex-col bg-blue-200 mx-7 drop-shadow">
      <div className="p-5">
        <p className="text-neutral-900 font-itim xl:text-2xl text-lg mb-5">
          {title}
        </p>
        {children}
      </div>
    </div>
  );
};
