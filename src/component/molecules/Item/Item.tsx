import Button from "@mui/material/Button";
import { Product } from "../../../model/Product";
import { Wrapper } from "./Item.styles";

const Item: React.FC<ItemProps> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export interface ItemProps {
  item: Product;

  handleAddToCart: (selectedItem: Product) => void;
}

export default Item;
