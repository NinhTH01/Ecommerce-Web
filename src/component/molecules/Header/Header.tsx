import {
  BellOutlined,
  CaretDownOutlined,
  MessageOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Input, Select } from "antd";
import type { MenuProps } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../LoginComponent/LoginComponent";

const Header: React.FC<HeaderProps> = ({ setCartOpen, totalItems, width }) => {
  const InputGroup = Input.Group;
  const { Option } = Select;

  const navigation = useNavigate();

  const [dropdown, setDropdown] = React.useState<boolean>();

  const handleGoToLogin = React.useCallback(() => {
    navigation("/login");
  }, [navigation]);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <LoginComponent />,
    },
  ];
  return (
    <div className="flex bg-slate-900 w-100 h-20 justify-between px-4">
      {width > 750 && (
        <div className="w-1/12 flex justify-center items-center ml-5">
          <p className=" text-white">Vietnam</p>
        </div>
      )}

      <div className="flex items-center">
        <MessageOutlined
          style={{ color: "white", fontSize: 16, marginRight: 8 }}
        />
        <div>
          <p className="text-white text-xs "> Deliver to</p>
          <p className="text-white"> Vietnam </p>
        </div>
      </div>

      <div className={`flex items-center w-1/2`}>
        <InputGroup compact className=" w-full bg-blue" style={{ left: "10%" }}>
          {width > 1380 && (
            <Select defaultValue="Category">
              <Option value="Category">Category</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          )}
          <Input
            style={{ width: "85%" }}
            defaultValue="Xihu District, Hangzhou"
            suffix={<SearchOutlined style={{ fontSize: 16 }} />}
          />
        </InputGroup>
      </div>

      <div className="flex px-1 items-center w-1/6 justify-around ">
        <div
          className={`${
            width > 1200 ? "border-r-2" : ""
          } px-6 border-l-sky-700`}
        >
          <Button
            className={`border-0 ${width < 800 ? "w-1/3" : ""}`}
            onClick={() => setCartOpen(true)}
          >
            <Badge size="small" count={totalItems}>
              <ShoppingCartOutlined style={{ color: "white", fontSize: 16 }} />
            </Badge>
          </Button>
          <Button className={`border-0 p-1 ${width < 800 ? "w-1/3" : ""}`}>
            <Badge size="small" count={totalItems}>
              <BellOutlined style={{ color: "white", fontSize: 16 }} />
            </Badge>
          </Button>
        </div>
        {width > 1200 && (
          <Dropdown
            menu={{ items }}
            overlayStyle={{ width: 400, borderRadius: 0 }}
            placement="bottomLeft"
            // trigger={["click"]}
            open={dropdown}
          >
            <div onClick={() => setDropdown(!dropdown)}>
              <Avatar
                size={32}
                icon={<UserOutlined />}
                className=" bg-white text-black"
              />
              <CaretDownOutlined className=" text-white ml-4" />
            </div>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export interface HeaderProps {
  setCartOpen: (value: boolean) => void;

  totalItems: number;

  width: number;
}

export default Header;
