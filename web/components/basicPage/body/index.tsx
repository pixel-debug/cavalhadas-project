import { BodyProps } from "@/types/types";

export const Body = ({ children }: BodyProps) => {
  return <div className="flex-grow ">{children}</div>;
};
