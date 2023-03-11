import React from "react";
import { VideoCameraOutlined, AppstoreOutlined } from "@ant-design/icons";
import { type MenuProps, Input, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const { Header, Content, Footer, Sider } = Layout;

type Iprops = {
  children: React.ReactNode;
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

let id = 0;
let cafedra = 0;

const items: MenuProps["items"] = [
  getItem("Преподаватели", "sub1", <VideoCameraOutlined />, [
    getItem(
      <Link to={`/cafedra/${++cafedra}`}>Кафедра ТОРС</Link>,
      "Кафедра 1"
    ),
    getItem(<Link to={`/cafedra/${++cafedra}`}>Кафедра ПрИ</Link>, "Кафедра 2"),
  ]),

  getItem("Этажи", "sub2", <AppstoreOutlined />, [
    getItem(<Link to={`/floor/${++id}`}>Этаж {id}</Link>, `Этаж ${id}`),
    getItem(<Link to={`/floor/${++id}`}>Этаж {id}</Link>, `Этаж ${id}`),
    getItem(<Link to={`/floor/${++id}`}>Этаж {id}</Link>, `Этаж ${id}`),
    getItem(<Link to={`/floor/${++id}`}>Этаж {id}</Link>, `Этаж ${id}`),
    getItem(<Link to={`/floor/${++id}`}>Этаж {id}</Link>, `Этаж ${id}`),
    getItem(<Link to={`/floor/${++id}`}>Этаж {id}</Link>, `Этаж ${id}`),
    getItem(<Link to={`/floor/${++id}`}>Этаж {id}</Link>, `Этаж ${id}`),
    getItem(<Link to={`/floor/${++id}`}>Этаж {id}</Link>, `Этаж ${id}`),
    getItem(<Link to={`/floor/${++id}`}>Этаж {id}</Link>, `Этаж ${id}`),
    getItem(<Link to={`/floor/${++id}`}>Этаж {id}</Link>, `Этаж ${id}`),
    getItem(<Link to={`/floor/${++id}`}>Этаж {id}</Link>, `Этаж ${id}`),
    getItem(<Link to={`/floor/${++id}`}>Этаж {id}</Link>, `Этаж ${id}`),
    getItem(<Link to={`/floor/${++id}`}>Этаж {id}</Link>, `Этаж ${id}`),
    getItem(<Link to={`/floor/${++id}`}>Этаж {id}</Link>, `Этаж ${id}`),
  ]),
];

export const LayoutComponent = ({ children }: Iprops) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header
        className={styles.header}
        style={{ background: colorBgContainer }}
      >
        <h3 className={styles.title}>
          <Link to="/">PSUTI-booking</Link>
        </h3>
        <Input.Search
          enterButton
          className={styles.search}
          placeholder="поиск"
        />
      </Header>
      <Layout style={{ height: "100%" }}>
        <Sider
          theme="light"
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="light" mode="inline" items={items} />
        </Sider>
        <Layout>
          <div style={{ margin: "24px" }}>
            <div
              style={{
                padding: 24,
                background: "white",
              }}
            >
              {children}
            </div>
          </div>
          <Footer style={{ textAlign: "center" }}>
            ©2023 Created by A&O Systems
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
