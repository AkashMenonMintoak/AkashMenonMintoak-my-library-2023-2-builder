import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

// import { globalData } from "../../slice/globalSlice";
// import { useCheckProductServiceable } from "../helpers/APIHooks/APIHooks";
// import { errorMessageHandler } from "../customToastContainer/errorMessageHandler";

export default function PincodeCheckOfProduct() {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  // const gbData = useSelector(globalData);
  const [pincodeValue, setPincodeValue] = useState<string | null>(null);

  // Get pincode response
  // const { data, error, isLoading } = useCheckProductServiceable(
  //   gbData?.storeId,
  //   pincodeValue
  // );

  // if (error) {
  //   errorMessageHandler(
  //     "pincode",
  //     error?.code,
  //     error?.message,
  //     error?.response?.status
  //   );
  // }

  // Check pincode on submit
  const onSubmit = (submitData: any) => {
    setPincodeValue(submitData?.pincode);
  };

  return (
    <React.Fragment>
      {/* main div */}
      <div>Check delivery location to see product availability and delivery</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full justify-evenly"
      >
        <div className="main-pincode">
          <div className="inner-pincode">
            <input
              type="text"
              {...register("pincode")}
              className={`input-pincode ${
                pincodeValue !== null 
                // &&
                // data !== null &&
                // (data ? "green-input-pincode" : "red-input-pincode")
              }`}
              placeholder="Postal code"
            />
            <button className="button-pincode">Check</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
