import { Button } from "antd";
import { CloudDownloadOutlined } from "@ant-design/icons";

const Item: React.FC<ItemProps> = ({ item, width }) => (
  <Button
    className={`p-5 ${
      width < 700 ? "w-1/3" : width < 1200 ? "w-1/4" : "w-1/6"
    }`}
    style={{ height: 120 }}
  >
    <CloudDownloadOutlined
      style={{ borderWidth: 0, fontSize: 40, paddingBottom: 20 }}
    />
    <p className=" overflow-hidden whitespace-nowrap text-ellipsis font-semibold">
      {item}
    </p>
  </Button>
);

export interface ItemProps {
  item: string;
  width: number;
}

export default Item;
