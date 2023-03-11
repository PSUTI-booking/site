import React from "react";
import { Avatar, Card, Tag, Space } from "antd";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export const User = () => {
  return (
    <Link className={styles.card} to="/user/1">
      <Card style={{ marginTop: 16 }}>
        <Card.Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random?key=1" />}
          title={
            <div className={styles.title}>
              Карташевский Вячеслав Григорьевич
            </div>
          }
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
