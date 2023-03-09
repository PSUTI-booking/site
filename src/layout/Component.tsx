import React from "react";
import {
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>Logo</Header>
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
            defaultSelectedKeys={["4"]}
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
              label: `${index + 1} Этаж`,
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
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
