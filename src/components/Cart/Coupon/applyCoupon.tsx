import React from "react";
import { useForm } from "react-hook-form";

export default function ApplyCoupon(props: any) {
  const { selectCoupon } = props;

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  // Apply coupon sumbmit
  const onSubmit = (applyCoupon: any) => {
    console.log("applyCoupon:", applyCoupon?.CouponValue);
  };

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full justify-evenly"
      >
        <input
          value={selectCoupon?.name || ""}
          placeholder="Enter Coupon Code"
          className="w-3/5 rounded-full form-input"
          {...register("CouponValue", { required: true })}
        />
        <button
          className={`${
            !selectCoupon?.name
              ? "hover:bg-gray-900 bg-black text-white"
              : "cursor-not-allowed bg-gray-500"
          }  px-3 text-white rounded-full`}
          disabled={selectCoupon?.name}
        >
          {selectCoupon?.name ? "Applied" : "Apply"}
        </button>
      </form>
    </React.Fragment>
  );
}
