import React, { useState, useEffect } from "react";
// import { Icon } from "@iconify/react";

interface Props {
  type: "success" | "danger" | "warning" | "";
  icon: string;
  message: string;
  limit?: number;
  clearToastMessage?: any;
}

export default function ToastMessage({
  type,
  // icon,
  message,
  limit = 2000,
  clearToastMessage,
}: Props) {
  const [showToastMessage, setShowToastMessage] = useState(true);

  // return type of icon, text color and bg color base on toast message type
  const typeOfToast = () => {
    let data = { icon: "", bgColor: "", textColor: "" };

    if (type === "success") {
      data = { icon: "", bgColor: "", textColor: "" };
    } else if (type === "danger") {
      data = { icon: "", bgColor: "", textColor: "" };
    } else if (type === "warning") {
      data = {
        icon: "",
        bgColor: "dark:bg-orange-700 bg-orange-100",
        textColor: "text-orange-500 dark:text-orange-200",
      };
    }

    return data;
  };

  // Close toast message after few second
  useEffect(() => {
    setTimeout(() => {
      clearToastMessage();
      setShowToastMessage(false);
    }, limit);
  }, [showToastMessage]);

  return (
    <React.Fragment>
      {showToastMessage && (
        <div className="absolute left-0 right-0 z-50 flex bottom-36">
          {/* Inner sub div */}
          <div className=" inner-sub-div-pd">
            {/* Round whilt color box */}

            {/* <div
                id="toast-warning"
                className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
              > */}
            <div
              className={`inline-flex items-center justify-center flex-shrink-0 w-full h-8 ${
                typeOfToast().bgColor
              } ${typeOfToast().textColor} rounded-lg`}
            >
              <div className="pl-2 pr-2 m-1 text-sm font-normal">{message}</div>
            </div>
            {/* </div> */}

            {/* <div className="round-box-pd">
                <div
                  id="toast-warning"
                  className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                  role="alert"
                >
                  <div
                    className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${
                      typeOfToast().bgColor
                    } ${typeOfToast().textColor} rounded-lg`}
                  >
                    <Icon icon={typeOfToast().icon} className="sm:w-6 sm:h-6" />
                    <div className="ml-3 text-sm font-normal">{message}</div>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
