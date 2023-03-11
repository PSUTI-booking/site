import { Space } from "antd";
import React from "react";
import { User } from "../Components/User";

export default function UsersPage() {
  return (
    <Space size={[8, 16]} wrap>
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </Space>
  );
}
