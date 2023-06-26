import React from "react";
import { Product } from "../../../model/Product";
import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";

const Cart: React.FC<CartProps> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const calculateTotal = React.useCallback((items: Product[]) => {
    return items.reduce(
      (ack: number, item) => ack + item.amount! * item.price!,
      0
    );
  }, []);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export interface CartProps {
  cartItems: Product[];

  addToCart: (selectedItem: Product) => void;

  removeFromCart: (id: number) => void;
}

export default Cart;
