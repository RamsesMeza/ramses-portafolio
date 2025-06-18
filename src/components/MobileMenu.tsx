import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useTranslations } from "../hooks/useLanguage";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuMobile: React.FC = () => {
  const t = useTranslations();

  const items: MenuProps["items"] =
    t.navbar?.map((item) => ({
      key: item.id,
      label: <a href={`#${item.id}`}>{item.label}</a>,
    })) || [];
  return (
    <Space direction="vertical">
      <Space wrap>
        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
          <button
            type="button"
            className="bg-[#106399] hover:bg-[#106399] hover:opacity-50 text-white px-[10px] py-2 rounded-md transition-colors cursor-pointer text-sm font-semibold"
            >
              <GiHamburgerMenu size={20}/>
            </button>
        </Dropdown>
      </Space>
    </Space>
  );
};

export default MenuMobile;
