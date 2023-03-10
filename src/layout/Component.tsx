import React from "react";
import { VideoCameraOutlined } from "@ant-design/icons";
import { Input, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const { Header, Content, Footer, Sider } = Layout;

type Iprops = {
  children: React.ReactNode;
};

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
          <Menu
            theme="light"
            mode="inline"
            items={[
              VideoCameraOutlined,
              VideoCameraOutlined,
              VideoCameraOutlined,
              VideoCameraOutlined,
              VideoCameraOutlined,
              VideoCameraOutlined,
              VideoCameraOutlined,
              VideoCameraOutlined,
              VideoCameraOutlined,
              VideoCameraOutlined,
              VideoCameraOutlined,
              VideoCameraOutlined,
            ].map((icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: <Link to={`/floor/${index + 1}`}>{index + 1} Этаж </Link>,
            }))}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ©2023 Created by A&O Systems
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
