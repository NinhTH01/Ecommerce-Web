import LinearProgress from "@material-ui/core/LinearProgress";
import { useProduct } from "../../service/use-product";
import Cart from "../../component/molecules/Cart/Cart";
import Item from "../../component/molecules/Item/Item";
import Header from "../../component/molecules/Header/Header";
import { Button, Carousel, Drawer, List, Tabs } from "antd";
import { useCategory } from "../../service/use-category";
import CategoryItem from "../../component/molecules/CategoryItem/CategoryItem";
import React from "react";
import TabPane from "antd/es/tabs/TabPane";
import TabPaneItem from "../../component/molecules/TabPaneItem/TabPaneItem";
import Countdown from "antd/es/statistic/Countdown";
import Link from "antd/es/typography/Link";
import { Product } from "../../model/Product";

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

  const [categories, categoryLoading, categoryError] = useCategory();

  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  const [width, setWidth] = React.useState<number>(0);

  const calculateTotal = React.useCallback((items: Product[]) => {
    return items.reduce(
      (ack: number, item) => ack + item.amount! * item.price!,
      0
    );
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWidth(width);
  };

  React.useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (isLoading || categoryLoading) {
    return <LinearProgress />;
  }

  if (error || categoryError) {
    return <div>There is error</div>;
  }

  return (
    <div className=" bg-slate-300 w-full h-full">
      <Header
        totalItems={getTotalItems(cartItems)}
        setCartOpen={setCartOpen}
        width={width}
      />
      <Drawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        width={500}
        title={"Your shopping cart"}
        footer={
          <div style={{ height: 40, padding: 0 }} className="flex  ">
            <div
              className="w-1/3 items-center justify-center "
              // style={{ borderRightWidth: 3, borderColor: "black" }}
            >
              <p className=" h-full font-bold text-center mt-2">
                Total: ${calculateTotal(cartItems).toFixed(2)}
              </p>
            </div>
            <div className="w-full h-full p-1 pl-4">
              <Button className="w-full bg-slate-700">
                <p className=" font-semibold text-white">Order</p>
              </Button>
            </div>
          </div>
        }
      >
        <Cart
          cartItems={cartItems}
          addToCart={handleAddCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>

      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>

      <div
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingBottom: 200,
        }}
        className="w-full h-full"
      >
        <div className={`${width > 700 ? "flex" : ""}`}>
          <div
            className={` h-52 ${
              width > 700 ? "w-1/2" : ""
            } bg-white m-2 rounded-xl`}
          >
            <div className="flex justify-between p-4">
              <p className="font-bold">Shop by Category</p>
              <Button className=" border-0 bg-white">
                <p className=" text-blue-500 font-semibold">See more</p>
              </Button>
            </div>
            <div className="flex w-full justify-around">
              {width < 700
                ? categories
                    ?.slice(0, 2)
                    ?.map((category) => (
                      <CategoryItem item={category} width={width} />
                    ))
                : width < 1200
                ? categories
                    ?.slice(0, 3)
                    ?.map((category) => (
                      <CategoryItem item={category} width={width} />
                    ))
                : categories?.map((category) => (
                    <CategoryItem item={category} width={width} />
                  ))}
            </div>
          </div>

          <div
            className={` h-52 ${
              width > 700 ? "w-1/2" : ""
            } bg-white m-2 rounded-xl`}
          >
            <Tabs defaultActiveKey="1">
              <TabPane
                tab={
                  <div className="= w-36 text-center">
                    <p className=" font-medium">Electricity Bill</p>
                  </div>
                }
                key="1"
              >
                <TabPaneItem />
              </TabPane>

              <TabPane
                tab={
                  <div className="= w-32 text-center">
                    <p className=" font-medium">Internet Data</p>
                  </div>
                }
                key="2"
              >
                {" "}
                <TabPaneItem />
              </TabPane>

              <TabPane
                tab={
                  <div className="= w-32 text-center">
                    <p className=" font-medium">Flight</p>
                  </div>
                }
                key="3"
              >
                {" "}
                <TabPaneItem />
              </TabPane>

              <TabPane
                tab={
                  <div className="= w-32 text-center">
                    <p className=" font-medium">Top Up</p>
                  </div>
                }
                key="4"
              >
                {" "}
                <TabPaneItem />
              </TabPane>
            </Tabs>
          </div>
        </div>

        <div className=" bg-slate-50 m-2 mt-8 rounded-xl">
          <div className="flex p-4 justify-between">
            <div className="flex justify-center items-center">
              <p className="font-bold mr-4">Special Product for you</p>
            </div>
            <div className="flex">
              <p className="font-bold text-xs"> Ends in</p>
              <Countdown
                value={deadline}
                format="HH:mm:ss"
                valueStyle={{
                  fontSize: 12,
                  paddingLeft: 4,
                }}
              />
            </div>
          </div>

          <div className="flex w-full p-4">
            <List
              className="px-10"
              style={{ width: "100%" }}
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 6,
                xxl: 6,
              }}
              dataSource={data}
              split={true}
              pagination={{
                position: "bottom",
                align: "center",
                defaultPageSize: 6,
                size: "small",
              }}
              renderItem={(item) => (
                <List.Item extra>
                  <Item item={item} handleAddToCart={handleAddCart} />
                </List.Item>
              )}
            />
          </div>
        </div>

        <div className=" bg-slate-50 m-2 mt-8 rounded-xl">
          <p className="font-bold mr-4 p-4">Best shirt product</p>

          <div className="flex w-full p-4">
            <List
              className="px-10"
              style={{ width: "100%" }}
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 3,
                xl: 6,
                xxl: 6,
              }}
              dataSource={data}
              split={true}
              pagination={{
                position: "bottom",
                align: "center",
                defaultPageSize: 6,
                size: "small",
              }}
              renderItem={(item) => (
                <List.Item extra>
                  <Item item={item} handleAddToCart={handleAddCart} />
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
      <div
        className="w-full bg-gray-800 flex max-h-96 h-48 justify-around p-8"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <div>
          <p className=" text-white font-semibold">Get to Know Us</p>
          <div className="mt-4">
            <p className=" text-white font-light my-2">Carrers</p>
            <p className=" text-white font-light my-2">Blog</p>
            <p className=" text-white font-light my-2">About</p>
          </div>
        </div>

        <div>
          <p className=" text-white font-semibold">Product</p>
          <div className="mt-4">
            <p className=" text-white font-light my-2">Shirt</p>
            <p className=" text-white font-light my-2">Jewel</p>
            <p className=" text-white font-light my-2">Chip</p>
          </div>
        </div>

        <div>
          <p className=" text-white font-semibold">Useful Link</p>
          <div className="mt-4">
            <Link
              href="https://www.youtube.com/"
              className="  my-2"
              style={{ fontSize: 18 }}
            >
              Youtube
            </Link>
            <br />
            <Link
              href="https://www.youtube.com/"
              className=" my-4"
              style={{ fontSize: 18 }}
            >
              Facebook
            </Link>
            <br />
            <Link
              href="https://www.youtube.com/"
              className="  my-2"
              style={{ fontSize: 18 }}
            >
              Twitter
            </Link>
          </div>
        </div>

        <div>
          <p className=" text-white font-semibold">Contact</p>
          <div className="mt-4">
            <p className=" text-white font-light my-2">Address</p>
            <p className=" text-white font-light my-2">Phone</p>
            <p className=" text-white font-light my-2">Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default HomeScreen;
