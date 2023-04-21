import React, { useState } from "react";
import { Icon } from "@iconify/react";
import ProcessPayment from "./ProcessPayment";
import Address from "./address";
// import { useSelector, useDispatch } from "react-redux";
import ProductList from "./ProductList";
// import { cart } from "../../slice/cartSlice";
import { commaAndPointValue, convertAmount } from "../helpers/convertAmount";
import CancellationPolicy from "./CancellationPolicy";
// import Coupon from "./Coupon/coupon";

export default function CartProduct({ isLogin }: any) {
  // const cartProduct = useSelector(cart);
  const [selectCoupon, setSelectCoupon] = useState<any>({});
  const [userDetails, setuserDetails] = useState<any>(null);

  const getFinalPayAmount = () => {
    let total = 0;
    // cartProduct?.cart?.forEach((item: any) => {
    //   total += item.listPrice * item.quantity;
    // });
    return total;
  };

  // Get coupon price
  const getCouponPrice = (couponData: any) => {
    if (couponData?.percentageOff) {
      const total = convertAmount(getFinalPayAmount());
      return (total * couponData.price) / 100;
    }
    return couponData.price;
  };

  // Get to pay final amount
  const getToPayFinalPayAmount = () => {
    return selectCoupon?.name
      ? convertAmount(getFinalPayAmount()) - getCouponPrice(selectCoupon)
      : convertAmount(getFinalPayAmount());
  };

  const getTotalAmount = () => {
    let total = 0;
    // cartProduct?.cart?.forEach((item: any) => {
    //   total += item.mrp * item.quantity;
    // });
    return total;
  };

  // Set selected coupon detail
  // const onHandleSelectCoupon = (data: any) => {
  //   if (selectCoupon?.id === data.id) {
  //     setSelectCoupon({});
  //   } else {
  //     setSelectCoupon(data);
  //   }
  // };

  return (
    <div className="justify-around px-2 sm:flex sm:space-x-5 sm:px-0">
      {/* Left Side */}
      <div className="space-y-4 sm:w-[617px]">
        {/* All Product in Cart */}
        <div className="space-y-2 bg-white shadow-sm rounded-2xl">
          {/* Product List */}
          <ProductList />
        </div>

        {/* Select Address */}
        {isLogin && <Address setuserDetails={setuserDetails} />}

        {/* Proceed For Payment */}
        <ProcessPayment userDetails={userDetails} />
      </div>

      {/* Right Side */}
      <div className="mt-3 space-y-5 sm:w-80 mb-28 sm:mt-0 sm:mb-0">
        {/* Bill Details */}
        <div className="p-4 space-y-3 bg-white shadow-sm rounded-xl">
          <h2>Bill Details</h2>

          {/* Total Amount */}
          <div className="flex justify-between text-sm">
            <p className="text-black/50">Cart Total</p>
            <p>₹ {commaAndPointValue(getTotalAmount())}</p>
          </div>

          {/* Discount */}
          <div className="flex justify-between text-sm">
            <p className="flex items-center text-black/50">
              Discount{" "}
              <Icon
                icon="mdi:about-circle-outline"
                className="ml-1 sm:h-5 sm:w-5"
              />
            </p>
            <p>
              -₹ {commaAndPointValue(getTotalAmount() - getFinalPayAmount())}
            </p>
          </div>

          {/* Horizontal Line */}
          <hr className="border-t border-dashed" />

          {/* Final Amount */}
          <div className="flex justify-between pb-4 text-sm">
            <p className="text-black/50">Subtotal </p>
            <p>₹ {commaAndPointValue(getFinalPayAmount())}</p>
          </div>

          {/* Horizontal Line */}
          <hr className="border-t border-dashed" />

          {/* Delivery Charge & Message */}
          <div>
            <div className="flex justify-between text-sm">
              <p className="flex items-center text-black/50">
                Delivery Fee
                <Icon
                  icon="mdi:about-circle-outline"
                  className="ml-1 sm:h-5 sm:w-5"
                />
              </p>
              <p>
                <span className="line-through text-black/50">₹ 50</span>
                <span className="p-1 px-2 ml-1 text-xs bg-emerald-50 text-emerald-500 rounded-2xl">
                  FREE
                </span>
              </p>
            </div>

            <div className="flex justify-between text-xs">
              <p className="">Please select an address to see delivery fee</p>
            </div>
          </div>

          {/* Horizontal Line */}
          <hr className="border-t border-dashed" />

          {/*Apply coupon */}
          {selectCoupon?.name && (
            <div className="flex justify-between pb-4 text-sm">
              <p className="flex">
                {selectCoupon?.name}
                {/* Close address modal */}
                <button
                  className="pl-1 text-rose-500"
                  onClick={() => setSelectCoupon({})}
                >
                  <Icon icon="ic:twotone-close" className="w-4 h-4" />
                </button>
              </p>

              <p>₹ {commaAndPointValue(getCouponPrice(selectCoupon), false)}</p>
            </div>
          )}

          {/*To Pay*/}
          <div className="flex justify-between pb-4 text-sm">
            <p>To Pay</p>
            <p>₹ {commaAndPointValue(getToPayFinalPayAmount(), false)}</p>
          </div>
        </div>

        {/* Coupon Redeem */}
        {/* <Coupon selectCoupon={selectCoupon} setSelectCoupon={setSelectCoupon} /> */}

        {/* Cancellation Policy */}
        <CancellationPolicy />
      </div>
    </div>
  );
}
