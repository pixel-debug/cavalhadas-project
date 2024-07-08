import { BodyProps } from "@/types/types";

export const Body = ({ children }: BodyProps) => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      {children}
    </div>
  );
};
