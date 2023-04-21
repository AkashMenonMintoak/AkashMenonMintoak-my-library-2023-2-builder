import errorMessage, { replaceWith } from "../errorHandle/errorMessage";
import { customToast } from "./customToastContainer";

const errorMessageHandler = (
  toastId: string,
  code: string,
  message: string,
  status: number,
  repalceData: string = ""
) => {
  if (status !== 200) {
    let customMessage = errorMessage?.ERR_BAD_REQUEST;
    const errMsg = errorMessage?.[code];

    if (errMsg) {
      customMessage = errMsg.replaceAll(replaceWith, repalceData);
    } else if (message) {
      customMessage = message;
    }

    customToast.error(customMessage, {
      autoClose: false,
      toastId,
    });
  }
};

export { errorMessageHandler };
