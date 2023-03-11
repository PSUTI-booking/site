import React from "react";
import { Avatar, Card, Tag, Space } from "antd";

export default function UsersPage() {
  return (
    <div>
      <Card style={{ width: 300, marginTop: 16 }}>
        <Card.Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random?key=1" />}
          title="Алышев Юрий Витальевич"
          description={
            <Space size={[0, 8]} wrap>
              <Tag color="blue">Кафедра ТОРС</Tag>
              <Tag color="blue">Кафедра ПрИ</Tag>
              <Tag color="red">Ректор ПГУТИ</Tag>
            </Space>
          }
        />
      </Card>
    </div>
  );
}
