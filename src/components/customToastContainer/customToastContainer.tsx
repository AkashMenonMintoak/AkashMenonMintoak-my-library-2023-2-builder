import React from "react";
import { ToastContainer, toast } from "react-toastify";

export const customToast = toast;

export const CustomToastContainer = ({ className }: any) => {
  return <ToastContainer className={className} />;
};
