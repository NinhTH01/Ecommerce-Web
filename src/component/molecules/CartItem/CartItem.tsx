import { Button } from "antd";
import { Product } from "../../../model/Product";
import { Wrapper } from "./CartItem.styles";

const CartItem: React.FC<CartItemProps> = ({
  item,
  addToCart,
  removeFromCart,
}) => (
  <div className="flex" style={{ height: 150, padding: 4, margin: 16 }}>
    <img
      src={item.image}
      alt={item.title}
      style={{
        width: 75,
        height: "100%",
        aspectRatio: 150 / 75,
      }}
    />
    <div className="w-full p-4 content-between">
      <h3 className="font-semibold">{item.title}</h3>
      <div className="flex justify-between">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount! * item.price!).toFixed(2)}</p>
      </div>
      <div className="flex justify-between w-1/3 ">
        <Button size="small" onClick={() => removeFromCart(item.id!)}>
          -
        </Button>
        <p>{item.amount}</p>
        <Button size="small" onClick={() => addToCart(item)}>
          +
        </Button>
      </div>
    </div>
  </div>
);

export interface CartItemProps {
  item: Product;

  addToCart: (selectedItem: Product) => void;

  removeFromCart: (id: number) => void;
}

export default CartItem;
