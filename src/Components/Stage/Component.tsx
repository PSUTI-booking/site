import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  user: string;
  descr: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Кабинет",
    dataIndex: "name",
    key: "name",
    width: "10%",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Описание",
    dataIndex: "descr",
    key: "descr",
    width: "40%",
  },
  {
    title: "Преподаватель",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Теги",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "зам. декана") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Действие",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Пригласить {record.user}</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "02-03-03",
    name: "02-03-03",
    user: "Рассева",
    descr: "Кабинет зам. декана ПрИ",
    tags: ["зам. декана"],
  },
  {
    key: "02-35-01",
    name: "02-35-01",
    user: "Стефанова",
    descr: "Компьютерный класс, 15 компьютеров",
    tags: ["Преподаватель кафедры УТС"],
  },
  {
    key: "02-02-06",
    name: "02-02-06",
    user: "Алышев",
    descr: "Лекционная, четная сторона",
    tags: ["Преподаватель кафедры ПрИ", "Преподаватель кафедры Торс"],
  },
];

export const Stage = () => (
  <Table scroll={{ x: 1300 }} columns={columns} dataSource={data} />
);
