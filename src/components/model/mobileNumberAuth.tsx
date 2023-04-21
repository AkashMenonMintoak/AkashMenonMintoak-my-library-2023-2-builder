import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";
// import { logIn } from "../../slice/authSlice";
import CommonModel from "./CommonModel";

const MobileNumberAuth = ({
  isvisible,
  onClose = () => {},
  isCustomredirect = false,
  onValidHandle = () => {},
}: any) => {
  const phonenumber = useRef();
  const [otpInputEnabled, setotpInputEnabled] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState(false);
  // const dispatch = useDispatch();
  const router = useRouter();

  const [otp, setotp] = useState(new Array(6).fill(""));

  const handleChange = (element: any, index: any) => {
    if (isOtpValid) setIsOtpValid(false);
    // if (isNaN(element.value)) return false;
    setotp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const checkIdenticalNo = (otp: Array<string>) => {
    const x = otp[0];
    const temp = otp.slice(1, 6);
    return temp.every((element: string) => {
      return element === x;
    });
  };

  const handleSumbit = (e: any, type: any) => {
    e.stopPropagation();

    if (type === "number" && phonenumber.current) {
      setotpInputEnabled(true);
    }

    if (type === "otp" && otp) {
      if (checkIdenticalNo(otp)) {
        setIsOtpValid(true);
      } else {
        if (isCustomredirect) {
          onValidHandle();
        } else {
          router.push("/cart");
        }

        // dispatch(logIn());
        onClose();
      }
      setotp([...otp.map(() => "")]);
    }
  };

  const handleClose = () => {
    setotp([...otp.map(() => "")]);
    router.push("/login");
    onClose();
  };

  if (!isvisible) return null;

  return (
    <CommonModel
      isModelOpen={true}
      closeIcon={true}
      modelWidth={"max-w-lg"} // Tailwind Class
      product={
        <div className="py-2 bg-white h-68 rounded-xl ">
          {/* Top Navbar in Modal */}
          <div className="grid grid-cols-2 px-4 py-2 border-b">
            <div>
              <h1 className="text-lg font-bold lg:2xl">Almost There</h1>
            </div>
            <div className="font-bold text-right cursor-pointer hover:text-red-600">
              <button className="pl-5" onClick={() => handleClose()}>
                <p>X</p>
              </button>
            </div>
          </div>
          {/* End Navbar in Modal */}
          <div className="text-center">
            <div className="mt-5">
              <div className="px-5">
                <span>Enter the Phone number</span>
              </div>

              <div className="px-1 my-2 space-x-1 text-center lg:my-0">
                <input
                  onChange={(e) => {
                    if (!e.target.value) {
                      setotpInputEnabled(false);
                      if (isOtpValid) setIsOtpValid(false);
                    }
                    // phonenumber.current = e.target.value;
                  }}
                  className="px-5 py-1 border rounded"
                  type="tel"
                  id="phonenumberInput"
                  placeholder="Enter Your Phone Number"
                />
                <button
                  className="px-5 py-2 mx-0 my-2 text-white bg-gray-800 border rounded-lg lg:mx-2 lg:my-0 "
                  onClick={(e) => handleSumbit(e, "number")}
                >
                  Send
                </button>
              </div>
            </div>

            {/* Otp Auth */}
            <div className="px-5 lg:pt-8">
              <span>Enter the OTP </span>
            </div>
            <div id="otp" className="px-1 pb-5 text-center lg:pb-10">
              {otp.map((data, index) => {
                return (
                  <input
                    className={`w-9 h-9 m-1.5 text-center outline-none border-gray-500 rounded ${
                      isOtpValid ? "border-red-500 " : ""
                    } ${!otpInputEnabled ? "border-gray-200" : ""}`}
                    type="text"
                    maxLength={1}
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    disabled={!otpInputEnabled}
                  />
                );
              })}
              <button
                className={`border lg:mx-1 mx-0 lg:my-0 my-2 ${
                  !otpInputEnabled ? "bg-gray-300 " : "bg-gray-800 "
                } text-white py-2 px-5 rounded-lg `}
                onClick={(e) => handleSumbit(e, "otp")}
                disabled={!otpInputEnabled}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default MobileNumberAuth;
