import React from "react";

import TopNavBar from "./desktopHeader";
// import { useSelector } from "react-redux";
import MobileHeader from "./mobileHeader";
import { menuListData } from "./menuListData";
// import { auth } from "../../../slice/authSlice";
// import { useAddressCustomer } from "../../helpers/APIHooks/APIHooks";

export default function Header() {
  // const isAuthenticated = useSelector(auth);
  const { sortMenuList } = menuListData();

  // New Address API Integration
  // const { data: dataCustomer } = useAddressCustomer();

  return (
    <div className="hr-mdiv">
      <TopNavBar
        // isLogin={isAuthenticated.auth}
        menuList={sortMenuList}
        // mobileNumber={dataCustomer?.mobileNumber}
      />

      <MobileHeader menuList={sortMenuList} />
    </div>
  );
}
