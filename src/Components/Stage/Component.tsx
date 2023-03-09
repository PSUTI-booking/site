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
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Описание",
    dataIndex: "descr",
    key: "descr",
    width: "40%",
  },
  {
    title: "Пользователь",
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
    user: "Щелкунов",
    descr: "Уроки мата",
    tags: ["loser"],
  },
  {
    key: "02-03-04",
    name: "02-03-04",
    user: "Алышев",
    descr:
      "Строит Шатл для ракеты, которая захватит всю солнечную систему на С и С++",
    tags: ["cool", "teacher"],
  },
  {
    key: "02-03-05",
    name: "02-03-05",
    user: "Баженов",
    descr:
      "Бизнесс планы по разработке работов для битвы со студентами Аерокоса, и план по развитию ПГУТИ после победы. Так же чтение нотаций Щелкунову про его сквернословие",
    tags: ["cool", "teacher"],
  },
];

const App: React.FC = () => (
  <Table scroll={{ x: 1300 }} columns={columns} dataSource={data} />
);

export default App;
