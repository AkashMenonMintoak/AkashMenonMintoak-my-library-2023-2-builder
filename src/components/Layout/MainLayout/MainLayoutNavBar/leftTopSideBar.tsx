import React from "react";
import { Icon } from "@iconify/react";

export default function LeftTopSideBar({ setShowLeftSideBar }: any) {
  return (
    <React.Fragment>
      <h5 id="drawer-backdrop-label" className="ltsb-mdiv">
        Menu
      </h5>
      <button
        onClick={() => setShowLeftSideBar(false)}
        type="button"
        data-drawer-dismiss="drawer-backdrop"
        aria-controls="drawer-backdrop"
        className="ltsb-btn"
      >
        <Icon icon="material-symbols:close" className="ltsb-icon" />
      </button>
    </React.Fragment>
  );
}
