import { ModalProps } from "@/types/types";

export const Modal = ({ children, closeModal }: ModalProps) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
      onClick={closeModal}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      {children}
    </div>
  );
};
