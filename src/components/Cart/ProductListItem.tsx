import React from "react";
import Image from "next/image";
import { commaAndPointValue } from "../helpers/convertAmount";
import { Icon } from "@iconify/react";

export default function ProductListItem({product, onDecreaseQuantity, onIncreaseQuantity, onDeleteItem}: any) {

  return (
    <div
      className="mintoak-library-prduct-list-item-main"
      key={`mintoak-library-prduct-list-item-${product?.product?.id}`}
    >
      {/* Product Image */}
      <div className="flex-initial">
        <Image
          src={
            "https://www.spicymotion.be/assets/img/gallery/indirect-sampling/01.jpg"
          }
          height={64}
          width={64}
          alt="product_image"
          className="mintoak-library-prduct-list-item-image"
        />
      </div>

      {/* Product Name */}
      <div className="mintoak-library-prduct-list-item-name">
        <h2 className="truncate ">{product?.product?.name}</h2>
      </div>

      {/* Product Quantity Increase/Decrease */}
      <div className="mintoak-library-prduct-list-item-add-subtract">
        {/* {preCartData.length ? preQuantityComponent(product) : <></>} */}

        <div className="mintoak-library-prduct-list-item-add-subtract-buttons-flex">
          <button
            onClick={() =>
              onDecreaseQuantity(product?.product?.id, product?.quantity)
            }
          >
            <Icon icon="ph:minus-circle-bold" />
          </button>
          <div>{product.quantity}</div>
          <button
            onClick={() =>
              onIncreaseQuantity(product?.product?.id, product?.quantity)
            }
          >
            <Icon icon="material-symbols:add-circle-outline-rounded" />
          </button>
        </div>
      </div>

      {/* Remove Product From Cart */}
      <div className="flex-initial w-7">
        <div
          onClick={() => onDeleteItem(product?.product?.id)}
          className="delete-div-icon"
        >
          <Icon icon="ic:baseline-delete" className="sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Product MRP Price & List Price */}
      <div className="w-20 text-right">
        <p className="text-sm">
          ₹{" "}
          {commaAndPointValue(
            product?.product?.listPrice * product?.quantity
          )}
        </p>
        <p className="mintoak-library-prduct-list-item-mrp">
          ₹{" "}
          {commaAndPointValue(product?.product?.mrp * product?.quantity)}
        </p>
      </div>
    </div>
  );
}
