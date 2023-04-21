import React from "react";
import { Icon } from "@iconify/react";

export default function MobileHeaderLayout({ setShowLeftSideBar }: any) {
  return (
    <div className="mhl-mdiv">
      <div className="mhl-menu-div">
        <button
          onClick={() => {
            setShowLeftSideBar(true);
          }}
          className="mhl-menu-btn"
        >
          <Icon icon="material-symbols:menu" className="mhl-menu-icon" />
        </button>
      </div>
      <div className="mhl-menu-d-mdiv">
        <div className="mhl-menu-d-sdiv">
          <div className="mhl-name-div">
            <img
              src="https://dummyimage.com/600x400/000/fff"
              alt=""
              className="mhl-name-img"
            />
            <h1 className="mhl-name-h1">name</h1>
          </div>

          <div className="mhl-dname-div">
            <h1 className="mhl-dname-h1">DBA Name</h1>
          </div>

          <div className="mhl-cnct-div">
            <div className="mhl-cnct-sdiv">
              <a className="mhl-cnct-a">
                <Icon icon="material-symbols:call" className="mhl-cnct-icon" />
                Contact
              </a>
            </div>
            <div className="mhl-d-div">
              <a className="mhl-d-a">
                <Icon
                  icon="material-symbols:assistant-direction"
                  className="mhl-d-icon"
                />
                Direction
              </a>
            </div>
            <div className="mhl-share-div">
              <a className="mhl-share-a">
                <Icon
                  icon="material-symbols:share-outline"
                  className="mhl-share-icon"
                />
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
