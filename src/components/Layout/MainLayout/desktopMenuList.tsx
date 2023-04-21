import React from "react";
import Link from "next/link";

export default function DesktopMenuList({ menuList }: any) {
  return (
    <div className="ml-mdiv">
      <nav className="ml-nav">
        {menuList?.map((data: any, index: number) => (
          <Link
            key={index}
            href={data.url}
            className={`ml-link ${data?.quantity && "ml-qnt"}`}
          >
            {data?.quantity > 0 && (
              <div className="ml-cart-view-qty">{data?.quantity}</div>
            )}

            {data.icon}
            <span>{data.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
