import { toast } from "react-toastify";

const toastError = (text: string) => {
  toast.error(`${text}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const toastSuccess = (text: string) => {
  toast.success(`${text}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const toastSuccessBottom = (text: string) => {
  toast.success(`${text}`, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export { toastError, toastSuccess, toastSuccessBottom };
