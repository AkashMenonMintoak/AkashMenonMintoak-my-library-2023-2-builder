import React from "react";
import EmptyCart from "./emptyCart";
import ProductListItem from "./ProductListItem";

export default function ProductList({listOfItems, onDecreaseQuantity, onIncreaseQuantity, onDeleteItem, isLoading}: any) {

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mintoak-library-prduct-list-main-container">
      {/* Product name, Image, increase decrease & Price */}
      <div className="mintoak-library-prduct-list-inner-container">
        {listOfItems?.length > 0 ? (
          <React.Fragment>
            {listOfItems.map((product: any) => (<ProductListItem
              product={product}
              onDecreaseQuantity={onDecreaseQuantity}
              onIncreaseQuantity={onIncreaseQuantity}
              onDeleteItem={onDeleteItem}
            />))}
          </React.Fragment>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
}
