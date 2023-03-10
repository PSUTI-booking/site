import React from "react";
import { LayoutComponent } from "./layout";
import { Card, Space, Typography } from "antd";

import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <LayoutComponent>
      <div>
        <Card
          title="2 Этаж"
          extra={<Link to="/floor/2">Подробнее</Link>}
          style={{ width: 300 }}
        >
          <Space direction="vertical">
            <Typography.Text type="danger">02-03-03 Занят</Typography.Text>
            <Typography.Text type="success">02-03-03 Свободен</Typography.Text>
            <Typography.Text type="danger">02-03-03 Занят</Typography.Text>
          </Space>
        </Card>
      </div>
    </LayoutComponent>
  );
}

export default App;
