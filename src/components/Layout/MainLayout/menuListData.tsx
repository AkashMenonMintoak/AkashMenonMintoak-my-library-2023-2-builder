import React from "react";
import { Icon } from "@iconify/react";
// import { useSelector } from "react-redux";

// import { cart } from "../../../slice/cartSlice";
import { sortOrderBy } from "../../helpers/sortOrderBy";
// import { globalData } from "../../../slice/globalSlice";

export const menuListData = () => {
  // const gbData = useSelector(globalData);

  // const cartItems = useSelector(cart);

  const getTotalQuantity = () => {
    let total = 0;
    // cartItems?.cart?.forEach((item: { quantity: number }) => {
    //   total += item.quantity;
    // });
    return total;
  };

  const pathUrl = {
    // product: gbData?.storeId ? "/" + gbData?.storeId : "/",
    product: '/',
    order: "/order",
    shipping: "/shipping",
    tracking: "/tracking",
    contactUs: "/contact-us",
    cart: "/cart",
  };

  const menuList = [
    {
      name: "Product",
      icon: <Icon icon="entypo:shop" className="sm:h-6 sm:w-6 " />,
      url: pathUrl?.product,
      ordeby: 1,
      isCustomMethod: false,
    },
    {
      name: "Order",
      icon: <Icon icon="icon-park-solid:order" className="sm:h-6 sm:w-6 " />,
      url: pathUrl?.order,
      ordeby: 2,
      isCustomMethod: false,
    },
    {
      name: "Shipping",
      icon: (
        <Icon
          icon="material-symbols:local-shipping-outline"
          className="sm:h-6 sm:w-6 "
        />
      ),
      url: pathUrl?.shipping,
      ordeby: 2,
      isCustomMethod: false,
    },
    {
      name: "Tracking",
      icon: (
        <Icon
          icon="material-symbols:track-changes"
          className="sm:h-6 sm:w-6 "
        />
      ),
      url: pathUrl?.tracking,
      ordeby: 3,
      isCustomMethod: false,
    },
    {
      name: "Contact Us",
      icon: (
        <Icon icon="ic:baseline-contact-phone" className="sm:h-6 sm:w-6 " />
      ),
      url: pathUrl?.contactUs,
      ordeby: 5,
      isCustomMethod: false,
    },
    {
      name: "Cart",
      icon: <Icon icon="tabler:shopping-bag" className="sm:h-6 sm:w-6 " />,
      url: pathUrl?.cart,
      ordeby: 4,
      isCustomMethod: true,
      quantity: getTotalQuantity(),
    },
  ];

  const sortMenuList = sortOrderBy(menuList, "ordeby") || [];

  return { menuListData, sortMenuList, pathUrl };
};
