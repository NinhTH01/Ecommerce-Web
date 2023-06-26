import React from "react";
import { useQuery } from "react-query";
import { Product } from "../model/Product";
import { productRepository } from "../repository/product-repository";

export function useProduct(): [
  Product[] | undefined,
  boolean,
  unknown,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  Product[],
  any,
  (selectedItem: Product) => void,
  (id: number) => void
] {
  const [cartOpen, setCartOpen] = React.useState<boolean>(false);

  const [cartItems, setCartItems] = React.useState<Product[]>([]);

  const fetchProduct = React.useCallback(async () => {
    return await productRepository.product();
  }, []);

  const { data, isLoading, error } = useQuery<Product[]>(
    "products",
    fetchProduct
  );

  const getTotalItems = (items: Product[]) =>
    items.reduce((ack: number, item) => ack + item.amount!, 0);

  const handleAddCart = React.useCallback((selectedItem: Product) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === selectedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === selectedItem.id
            ? { ...item, amount: item.amount! + 1 }
            : item
        );
      }
      return [...prev, { ...selectedItem, amount: 1 }];
    });
  }, []);

  const handleRemoveFromCart = React.useCallback((id: number) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount! - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as Product[])
    );
  }, []);

  return [
    data,
    isLoading,
    error,
    cartOpen,
    setCartOpen,
    cartItems,
    getTotalItems,
    handleAddCart,
    handleRemoveFromCart,
  ];
}
