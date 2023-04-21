import React from "react";

import DesktopMenuList from "./desktopMenuList";
import LoginButton from "./MainLayoutNavBar/loginButton";

export default function TopNavBar({ menuList, isLogin, mobileNumber }: any) {
  return (
    <React.Fragment>
      <div className="hidden py-4 mx-6 lg:mt-2 lg:block">
        <header className="relative lg:text-gray-600 body-font">
          <DesktopMenuList menuList={menuList} />

          <LoginButton isLogin={isLogin} mobileNumber={mobileNumber} />
        </header>
      </div>
    </React.Fragment>
  );
}
