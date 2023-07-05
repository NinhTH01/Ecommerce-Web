import React from "react";
import { Button, Cascader, Input, InputNumber } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const Cart: React.FC<CartProps> = () => {
  return (
    <div className="flex w-full align-middle p-3">
      <div className="m-3">
        <p className=" font-semibold mb-2">Phone Number</p>
        <InputNumber
          size="large"
          addonBefore={<Cascader placeholder="+84" style={{ width: 70 }} />}
          placeholder="0762447965"
        />
      </div>

      <div className="m-3">
        <p className=" font-semibold mb-2">Select Data Package</p>
        <Input
          size="large"
          addonAfter={<CaretDownOutlined />}
          defaultValue={"100GB / 30 Days"}
          className="font-semibold text-xs"
        />
      </div>

      <Button className="my-10 bg-blue-500" size="large">
        <p className=" font-medium text-white px-3" style={{ fontSize: 12 }}>
          Buy now
        </p>
      </Button>
    </div>
  );
};

export interface CartProps {}

export default Cart;
