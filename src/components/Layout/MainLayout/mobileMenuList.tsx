import React from "react";
import Link from "next/link";

export default function MobileMenuList({ menuList, setShowLeftSideBar }: any) {
  return (
    <div className="mml-mdiv">
      <ul className="mml-ul">
        {menuList?.map((data: any, index: number) => (
          <li className="mml-li">
            <Link
              key={index}
              href={data.url}
              onClick={() => {
                setShowLeftSideBar(false);
              }}
              className="mml-link"
            >
              {data?.quantity > 0 ? (
                <div className="mml-cnt-div">
                  {data.icon}
                  <div className="mml-cnt-qnt">{data?.quantity}</div>
                </div>
              ) : (
                <React.Fragment>{data.icon}</React.Fragment>
              )}

              <span className="mml-cnt-span">{data.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
