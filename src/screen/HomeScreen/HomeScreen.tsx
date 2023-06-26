import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useProduct } from "../../service/use-product";
import Cart from "../../component/molecules/Cart/Cart";
import Item from "../../component/molecules/Item/Item";
import { Wrapper, StyledButton } from "./HomeScreen.styles";

const HomeScreen = () => {
  const [
    data,
    isLoading,
    error,
    cartOpen,
    setCartOpen,
    cartItems,
    getTotalItems,
    handleAddCart,
    handleRemoveFromCart,
  ] = useProduct();

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    return <div>There is error</div>;
  }

  return (
    <>
      <div className="flex bg-slate-500 w-100 ">
        Home
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart
            cartItems={cartItems}
            addToCart={handleAddCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
      </div>
      <Wrapper>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddCart} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export default HomeScreen;
