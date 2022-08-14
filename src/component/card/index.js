import React, { useCallback, useState } from "react";
import { EditOutlined, LocationOn, LocationOnOutlined, SettingsOutlined } from "@mui/icons-material";
import { Avatar, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Meta } = Card;

const CardD = ({ cardData }) => {
  const { id, img, avatar, priceOfSale, priceOfRent, description, location } =
    cardData;
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/compounds" + id, { push: true }),
    [navigate]
  );
  return (
    <>
      {/* <Link to="#"> */}
      <Card
        className="mb-3"
        cover={
          <img alt="example" src={img} height={250} onClick={handleOnClick} />
        }
        style={{ cursor: "pointer" }}
        actions={[
          <SettingsOutlined key="setting" />,
          <EditOutlined key="edit" />,
        ]}
      >
        <div onClick={handleOnClick}>
          <Avatar src={avatar} />
          <h3 className="price">{priceOfSale ? priceOfSale : priceOfRent}</h3>
          <h5>{description}</h5>
          <p><LocationOnOutlined /> {location}</p>
        </div>
      </Card>
      {/* </Link> */}
    </>
  );
};
export default CardD;
