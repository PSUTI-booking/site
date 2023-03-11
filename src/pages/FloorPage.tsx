import { Typography } from "antd";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { Stage } from "../Components/Stage";

export function loader({ params }: { params: any }) {
  return params.floorId;
}

export default function FloorPage() {
  const floorId = useLoaderData();

  return (
    <>
      <Typography.Title level={3}>{String(floorId)} Этаж</Typography.Title>
      <Stage />
    </>
  );
}
