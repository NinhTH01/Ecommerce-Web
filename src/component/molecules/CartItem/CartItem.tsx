import Button from "@mui/material/Button";
import { Product } from "../../../model/Product";
import { Wrapper } from "./CartItem.styles";

const CartItem: React.FC<CartItemProps> = ({
  item,
  addToCart,
  removeFromCart,
}) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount! * item.price!).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id!)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export interface CartItemProps {
  item: Product;

  addToCart: (selectedItem: Product) => void;

  removeFromCart: (id: number) => void;
}

export default CartItem;
