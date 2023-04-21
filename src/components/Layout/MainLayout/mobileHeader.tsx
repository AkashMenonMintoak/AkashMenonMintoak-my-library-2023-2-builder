import React, { useState } from "react";

import LeftSideBar from "./MainLayoutNavBar/LeftSideBar";
import MobileHeaderLayout from "./MainLayoutNavBar/mobileHeaderLayout";

export default function MobileHeader({ menuList }: any) {
  const [showLeftSideBar, setShowLeftSideBar] = useState(false);

  return (
    <React.Fragment>
      <MobileHeaderLayout setShowLeftSideBar={setShowLeftSideBar} />

      {showLeftSideBar && (
        <LeftSideBar
          menuList={menuList}
          setShowLeftSideBar={setShowLeftSideBar}
        />
      )}
    </React.Fragment>
  );
}
