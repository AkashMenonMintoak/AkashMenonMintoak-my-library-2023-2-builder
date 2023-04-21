import React from "react";

import MobileMenuList from "../mobileMenuList";
import LeftTopSideBar from "./leftTopSideBar";

interface Props {
  menuList: any;
  setShowLeftSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LeftSideBar(props: Props) {
  const { menuList, setShowLeftSideBar } = props;

  return (
    <React.Fragment>
      <div
        id="drawer-backdrop"
        className="lsb-mdiv"
        tabIndex={-1}
        aria-labelledby="drawer-backdrop-label"
      >
        <LeftTopSideBar setShowLeftSideBar={setShowLeftSideBar} />
        <MobileMenuList
          menuList={menuList}
          setShowLeftSideBar={setShowLeftSideBar}
        />
      </div>
    </React.Fragment>
  );
}
