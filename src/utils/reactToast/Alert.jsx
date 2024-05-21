import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Alert = ({ toastText }) => {
  toast.error(toastText);
  return <ToastContainer />;
};

export default Alert;
