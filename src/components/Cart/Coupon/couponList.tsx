import React from "react";

// import { commaAndPointValue } from "../../helpers/convertAmount";
// import { useGetCouponListOnsearch } from "../../helpers/APIHooks/APIHooks";

export default function CouponList({ selectCoupon, setSelectCoupon, couponData = [] }: any) {
  // Get product list using stroe id
  // const { couponData, error, isLoading } = useGetCouponListOnsearch();

  // if (error) {
  //   errorMessageHandler(
  //     "pincode",
  //     error?.code,
  //     error?.message,
  //     error?.response?.status
  //   );
  // }

  // Set selected coupon detail
  const onHandleSelectCoupon = (data: any) => {
    if (selectCoupon?.id === data.id) {
      setSelectCoupon({});
    } else {
      setSelectCoupon(data);
    }
  };

  return (
    <React.Fragment>
      {/* Coupon list */}
      {couponData && (
        <div className="coupon-list-div">
          {couponData.map((data: any, index: number) => (
            <div key={index}>
              <div
                key={index}
                className="cursor-pointer "
                onClick={() => onHandleSelectCoupon(data)}
              >
                <div className="flex justify-between text-sm">
                  <p className="flex items-center ">{data?.name}</p>
                  <p>
                    {data?.price}
                    off
                  </p>
                </div>
              </div>

              {/* Horizontal Line */}
              {couponData?.length > index + 1 && (
                <hr className="border-t border-dashed" />
              )}
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}
