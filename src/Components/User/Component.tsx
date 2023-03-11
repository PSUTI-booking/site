import React from "react";
import { Avatar, Card, Tag, Space } from "antd";
import { Link } from "react-router-dom";

export const User = () => {
  return (
    <Link to="/user/1">
      <Card style={{ maxWidth: 400, marginTop: 16 }}>
        <Card.Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random?key=1" />}
          title="Карташевский Вячеслав Григорьевич"
          description={
            <Space size={[0, 8]} wrap>
              <Tag color="blue">Кафедра ТОРС</Tag>
              <Tag color="blue">Кафедра ПрИ</Tag>
              <Tag color="red">Ректор ПГУТИ</Tag>
            </Space>
          }
        />
      </Card>
    </Link>
  );
};
