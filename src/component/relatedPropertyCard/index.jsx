import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Skeleton, Switch } from "antd";
import React, { useState } from "react";
const { Meta } = Card;

export default function RelatedPropertyCard() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <>

      <Card
        // actions={[
        //   <SettingOutlined key="setting" onClick={() => alert("no")} />,
        //   <EditOutlined key="edit" />,
        //   <EllipsisOutlined key="ellipsis" />,
        // ]}
      >
        <Skeleton loading={loading}  active>
          <Meta
            // avatar={<Avatar src="https://joesch.moe/api/v1/random?key=2" />}
            title="Related Property"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
  );
}

