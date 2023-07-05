import React from "react";
import { Product } from "../../../model/Product";
import { Button, Image } from "antd";
import styles from "./styles.module.css";

const Item: React.FC<ItemProps> = ({ item, handleAddToCart }) => {
  return (
    <div
      className={`m-4 bg-white ${styles.wrapper}`}
      style={{ borderWidth: 1 }}
    >
      <div className="p-4">
        <Image
          src={item.image}
          height={120}
          width={"100%"}
          preview={false}
          style={{ aspectRatio: 135 / 76 }}
        />
      </div>
      <div className={`py-2 p-4 bg-slate-200 ${styles.box1}`}>
        <p style={{ fontSize: 12 }} className=" text-gray-500">
          {item.category}
        </p>
        <p className=" overflow-hidden whitespace-nowrap text-ellipsis font-semibold">
          {item.title}
        </p>
        <div className="flex justify-between mt-4">
          <p className="font-semibold">{`$${item.price}`}</p>
          <p className="font-semibold">{`${item.rating.rate}|${item.rating.count}`}</p>
        </div>
        <Button
          className="  w-full justify-center mt-4"
          style={{ borderWidth: 0 }}
          onClick={() => handleAddToCart(item)}
        >
          <p className="font-semibold">Add to cart</p>
        </Button>
      </div>
    </div>
  );
};

export interface ItemProps {
  item: Product;

  handleAddToCart: (selectedItem: Product) => void;
}

export default Item;
