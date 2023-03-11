import React, { useEffect, useState } from "react";
import { Avatar, Divider, List, Skeleton, Tag, Typography } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <div>
      <Typography.Title>Последние события</Typography.Title>
      <div
        id="scrollableDiv"
        style={{
          height: 400,
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < 50}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item key={item.email}>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      style={{ marginTop: 15 }}
                      src={item.picture.large}
                    />
                  }
                  title={
                    <>
                      <a style={{ marginRight: 15 }} href="https://ant.design">
                        {item.name.first} {item.name.last}
                      </a>
                      <Tag color="blue">Кафедра ТОРС</Tag>
                      <Tag color="blue">Кафедра ПрИ</Tag>
                    </>
                  }
                  description={
                    <Tag color={index % 2 == 0 ? "volcano" : "green"}>
                      {index % 2 == 0 ? "Забранировал" : "Освободил"} 02-
                      {index + 10}-{index}
                    </Tag>
                  }
                />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default App;
