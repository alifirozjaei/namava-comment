import { toast } from "react-toastify";

function toastWarn(message) {
  toast.warn(message, {
    position: "top-center",
    autoClose: 500000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

export default toastWarn;
