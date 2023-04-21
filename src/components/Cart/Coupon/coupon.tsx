import React from "react";

import ApplyCoupon from "./applyCoupon";
import CouponList from "./couponList";

export default function Coupon(props: any) {
  return (
    <div className="coupon-div">
      <p>Apply Coupon</p>

      {/* Apply Coupon Form Line */}
      <ApplyCoupon selectCoupon={props.selectCoupon} />

      {/* Horizontal Line */}
      <hr className="border-t border-dashed" />

      {/* Coupon list */}
      <CouponList {...props} />
    </div>
  );
}
