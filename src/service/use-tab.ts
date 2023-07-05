import { MenuProps, TabsProps } from "antd";

export function useTab(): [MenuProps["items"]] {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: `Tab 1`,
    },
    {
      key: "2",
      label: `Tab 2`,
    },
    {
      key: "3",
      label: `Tab 3`,
    },
  ];

  return [items];
}
