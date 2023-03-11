import { Space } from "antd";
import React from "react";
import { User } from "../Components/User";

export default function UsersPage() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
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
    </div>
  );
}
