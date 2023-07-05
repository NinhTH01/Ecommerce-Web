import React from "react";
import { Product } from "../../../model/Product";
import CartItem from "../CartItem/CartItem";

const Cart: React.FC<CartProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  return (
    <div className="">
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export interface CartProps {
  cartItems: Product[];

  addToCart: (selectedItem: Product) => void;

  removeFromCart: (id: number) => void;
}

export default Cart;
