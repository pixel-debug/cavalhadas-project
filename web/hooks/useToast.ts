import { ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToast = () => {
  const options: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    style: {
      width: "auto",
    },
    className: "sm:w-[200px]",
  };

  const toastSuccess = (message: string) => {
    toast.success(message, options);
  };

  const toastError = (message: string) => {
    toast.error(message, options);
  };

  return { toastError, toastSuccess };
};

export default useToast;
