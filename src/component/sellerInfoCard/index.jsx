import React, { useState, useEffect } from "react";
import { Avatar, Card, Skeleton } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
// import originalFakeData from "../../services/data.json";
import axios from "axios";
// import UserInfo from "../../services/usersInfo.json";
const { Meta } = Card;

function SellerInfoCard({ cardData }) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    await axios
      .get(`http://localhost:3000/users/${cardData.sellerInfo}`)
      .then(({ data }) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Skeleton loading={loading} avatar active>
        <Card
          actions={[
            <SettingOutlined key="setting" onClick={() => alert("no")} />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src={userData && userData.avatar} />}
            title={userData && userData.name}
            description={"This is the description"}
          />
        </Card>
      </Skeleton>
    </>
  );
}

export default SellerInfoCard;
