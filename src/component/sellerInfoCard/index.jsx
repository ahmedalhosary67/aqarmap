import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Card, Skeleton, Switch } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import originalFakeData from "../../services/data.json";
import UserInfo from "../../services/usersInfo.json";
const { Meta } = Card;

function SellerInfoCard() {
  const [allData, setAllData] = useState(originalFakeData);
  const [cardData, setCardData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setCardData(allData.find((item) => item._id === params.id));
    setUserData(UserInfo.find((item) => item._id === cardData.sellerInfo));
    console.log(userData);
    setLoading(false);
  }, [cardData, userData]);
  
  
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <>

      <Card
        actions={[
          <SettingOutlined key="setting" onClick={() => alert("no")} />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src={userData && userData.avatar} />}
            title={userData && userData.name}
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
  );
}

export default SellerInfoCard;
