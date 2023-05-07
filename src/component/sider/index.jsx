import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Alert, Avatar, Card, Skeleton, Switch } from "antd";
import React, { useState } from "react";
const { Meta } = Card;

function Sider() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  //   const onChange = (checked) => {
  //     setLoading(!checked);
  //   };
  return (
    <>
      {/* <Switch checked={!loading} onChange={onChange} /> */}

      <Card
        actions={[
          <SettingOutlined key="setting" onClick={() => alert("no")} />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://joesch.moe/api/v1/random?key=2" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
  );
}

export default Sider;
