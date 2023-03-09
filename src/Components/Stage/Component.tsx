import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  user: string;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
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
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.user}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "02-03-03",
    name: "02-03-03",
    user: "Щелкунов",
    address: "Уроки мата",
    tags: ["loser"],
  },
  {
    key: "02-03-04",
    name: "02-03-04",
    user: "Алышев",
    address: "Строит Шатл",
    tags: ["cool", "teacher"],
  },
  {
    key: "02-03-05",
    name: "02-03-05",
    user: "Баженов",
    address: "Бизнесс планы",
    tags: ["cool", "teacher"],
  },
];

const App: React.FC = () => <Table scroll={{ x: 1300 }} columns={columns} dataSource={data} />;

export default App;
