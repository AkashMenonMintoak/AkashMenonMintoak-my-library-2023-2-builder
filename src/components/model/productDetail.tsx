import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
// import { useSelector, useDispatch } from "react-redux";
import MobileNumberAuth from "./mobileNumberAuth";
// import { globalData } from "../../slice/globalSlice";
// import { addToCart, cart, APICartId } from "../../slice/cartSlice";
// import { APIExpressCartId, expressCart } from "../../slice/expressCartSlice";
// import { auth } from "../../slice/authSlice";
import PincodeCheckOfProduct from "../features/PincodeCheckOfProduct";
import ToastMessage from "./toastMessage";
import { commaAndPointValue } from "../helpers/convertAmount";
// import { useIncreaseCart } from "../helpers/APIHooks/APIHooks";
import CommonModel from "./CommonModel";

type ProductType = {
  isShow: boolean;
  data: any;
};

interface Props {
  productDetail: ProductType;
  setProductDetail: any;
  isLogin: boolean;
  setIsLogin: any;
}

export default function ProductDetail({
  productDetail,
  setProductDetail,
  // isLogin,
  // setIsLogin,
}: Props) {
  const router = useRouter();

  const defaultToastMessage = {
    type: "",
    icon: "",
    message: "",
  };
  // const dispatch = useDispatch();
  // const gbData = useSelector(globalData);
  // const isAuthenticated = useSelector(auth);

  const [quantity, setQuantity] = useState(0);
  const [isLimitOfQuantity, setIsLimitOfQuantity] = useState(false);
  const [MobileDialogeShow, setMobileDialogeShow] = useState(false);
  // const [otpDialogeShowNav, setOtpDialogeShowNav] = useState(false);
  const [toastMessage, setToastMessage] = useState<any>(defaultToastMessage);

  // const { trigger } = useIncreaseCart();

  // const proceedForPayment = () => {
  //   setProductDetail(false);
  // };

  // Close product detail model
  const closeModel = () => {
    setProductDetail({
      isShow: false,
      data: {},
    });

    setIsLimitOfQuantity(false);
    setToastMessage(defaultToastMessage);
  };

  const clearToastMessage = () => {
    setToastMessage(defaultToastMessage);
  };

  const onHandleAddToCart = () => {
    setQuantity(quantity + 1);
  };

  // Increase product quantity.
  const plusQuantity = () => {
    if (quantity < productDetail?.data?.maximumOrderQuantity) {
      setQuantity(quantity + 1);
    } else {
      setIsLimitOfQuantity(true);
      setToastMessage({
        type: "warning",
        icon: "",
        message: `Max order is ${productDetail?.data?.maximumOrderQuantity}.`,
      });
    }
  };

  // Descrease product quantity.
  const minusQuantity = () => {
    setQuantity(quantity - 1);
    setIsLimitOfQuantity(false);
    setToastMessage(defaultToastMessage);
  };

  // Return class of cursor
  const returnDisabledClass = (status: boolean) => {
    return status ? "cursor-not-allowed" : "cursor-pointer";
  };

  const expressCheckoutPage = async () => {
    if (quantity >= 1) {
      // const resData = await trigger({
      //   productId: productDetail.data?.id,
      //   modelProductQuantity: quantity,
      //   storeId: gbData?.storeId,
      //   purchaseType: "SINGLE",
      // });
      // dispatch(APIExpressCartId(resData?.id));
    }
    // isAuthenticated.auth
    //   ? router.push("/express-checkout")
    //   : setMobileDialogeShow(true);
  };

  const processToCheckout = () => {
    return (
      <div className="flex flex-row flex-wrap">
        <button
          onClick={async () => {
            // dispatch(
            //   addToCart({
            //     id: productDetail.data?.id,
            //     productName: productDetail?.data?.name,
            //     imageUrl: productDetail?.data?.imageUrl,
            //     listPrice: productDetail?.data?.listPrice,
            //     mrp: productDetail?.data?.mrp,
            //     quantity,
            //   })
            // );
            router.push("/cart");
          }}
          type="button"
          // disabled={cartItems?.cart.length <= 0}
          className=" hover:bg-gray-900 text-white bg-gray-800  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mb-4"
        >
          Proceed to checkout
        </button>
        {/* disabled={!expressCartItems?.expressCart} */}
        <button
          onClick={expressCheckoutPage}
          className=" hover:bg-gray-900 text-white bg-gray-800  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mb-4"
        >
          Buy now
        </button>
      </div>
    );
  };

  return (
    <React.Fragment>
      {productDetail?.isShow && productDetail?.data?.name ? (
        <React.Fragment>
          <CommonModel 
          isModelOpen={true}
          closeIcon={true}
          modelWidth={"max-w-4xl"}
          product={ 
              <div className="round-box-pd">
                {/* Top div(back arrow button) */}
                <div className="grid grid-cols-2">
                  <div className="font-extrabold">
                    <Icon
                      onClick={() => closeModel()}
                      icon="bx:arrow-back"
                      className="arrow-pd"
                    />
                  </div>
                </div>

                {/* Bottom div */}
                <div className="last-sub-pd">
                  {/* Left bottom div */}
                  <div className="left-bsub-pd">
                    <img
                      className="img-pd"
                      // src={productDetail.data.imageUrl}
                      src={
                        "https://www.spicymotion.be/assets/img/gallery/indirect-sampling/01.jpg"
                      }
                      alt="image description"
                    />
                    <div className="hidden lg:block">
                      <PincodeCheckOfProduct />
                      {processToCheckout()}
                    </div>
                  </div>

                  {/* Right bottom div */}
                  <div className=" right-bsub-pd">
                    <div className="flex-col flex-wrap justify-start">
                      <h2 className="capitalize title-pd">
                        {productDetail.data.name}
                      </h2>

                      <div className="list-price-div-pd">
                        {/* List Price */}
                        <h2 className="list-price-text-pd">
                          ₹ {commaAndPointValue(productDetail.data.listPrice)}
                        </h2>

                        {/* Mrp Price */}
                        <span className="mrp-pd">
                          ₹ {commaAndPointValue(productDetail.data.mrp)}
                        </span>
                      </div>
                      <div className="flex flex-wrap justify-between ">
                        <div className="self-center p-1 m-1 ml-0 text-white bg-black rounded-xl">
                          <span className="text-sm">
                            ₹{" "}
                            {commaAndPointValue(
                              productDetail.data.discountOffered
                            )}{" "}
                            off
                          </span>
                        </div>
                        <div className="flex flex-wrap items-end justify-between h-full justify-items-center">
                          {quantity === 0 ? (
                            <button
                              onClick={() => onHandleAddToCart()}
                              type="button"
                              className="hover:bg-gray-900 text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 bg-gray-800  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-[12px] lg:text-sm px-5 py-2.5 mr-2 m-1"
                            >
                              Add To Cart
                            </button>
                          ) : (
                            <React.Fragment>
                              <div className="w-32 h-8 border-2 border-black rounded-[12px] mr-2 m-2 ">
                                <div className="grid items-center h-full grid-cols-3 justify-items-center">
                                  <Icon
                                    onClick={() => {
                                      minusQuantity();
                                    }}
                                    icon="ph:minus-circle-bold"
                                    className="cursor-pointer sm:w-6 sm:h-6"
                                  />
                                  <label className="block">{quantity}</label>
                                  <Icon
                                    onClick={() => {
                                      plusQuantity();
                                    }}
                                    icon="mdi:plus-circle-outline"
                                    className={`${returnDisabledClass(
                                      isLimitOfQuantity
                                    )} sm:w-6 sm:h-6`}
                                  />
                                </div>
                              </div>
                            </React.Fragment>
                          )}
                        </div>
                      </div>

                      <div className="mt-2">
                        <div className="hidden lg:block">
                          <div className="flex-col flex-wrap justify-start">
                            <div className="text-xl font-extrabold">
                              Description
                            </div>
                            <div className="text-justify">
                              {productDetail.data.multiLineDescription}{" "}
                            </div>
                          </div>
                        </div>

                        <div className="block lg:hidden">
                          <PincodeCheckOfProduct />
                          {processToCheckout()}
                        </div>

                        <div className="block bg-white lg:hidden rounded-2xl">
                          <Disclosure>
                            {({ open }) => (
                              <React.Fragment>
                                <Disclosure.Button className="flex justify-between w-full px-2 py-1 text-sm font-medium text-left bg-purple-100 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                                  <label className="lg:text-xl text-[15px] text-black/70">
                                    About Product
                                  </label>
                                  <Icon
                                    icon="material-symbols:keyboard-arrow-up"
                                    className={`${
                                      open ? "rotate-180 transform" : ""
                                    } h-5 w-5 `}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-1 pt-4 text-lg text-justify">
                                  {productDetail.data.multiLineDescription}
                                </Disclosure.Panel>
                              </React.Fragment>
                            )}
                          </Disclosure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          } />
        </React.Fragment>
      ) : null}

      {/* Show the toast message */}
      {toastMessage?.type && (
        <ToastMessage
          type={toastMessage.type}
          icon={toastMessage.icon}
          message={toastMessage.message}
          clearToastMessage={clearToastMessage}
        />
      )}
      <MobileNumberAuth
        isvisible={MobileDialogeShow}
        onClose={() => setMobileDialogeShow(false)}
      />
    </React.Fragment>
  );
}
