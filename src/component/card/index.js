import React, { useCallback } from "react";
import {
  Bed,
  Fullscreen,
  LocationOnOutlined,
  PhoneOutlined,
  Shower,
  WhatsApp,
} from "@mui/icons-material";
import { Avatar, Card } from "antd";
import { useNavigate } from "react-router-dom";

const CardD = ({ cardData }) => {
  const {
    id,
    img,
    avatar,
    price,
    description,
    location,
    area,
    rooms,
    bathrooms,
  } = cardData;
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/compounds" + id, { push: true }),
    [navigate]
  );
  return (
    <>
      <Card
        className="mb-3"
        cover={
          <img alt="example" src={img} height={250} onClick={handleOnClick} />
        }
        style={{ cursor: "pointer" }}
        actions={[
          <WhatsApp
            key="whatsApp"
            context="gggggggggg"
            style={{ color: "green" }}
          />,
          <PhoneOutlined key="phone" style={{ color: "blue" }} />,
        ]}
      >
        <div onClick={handleOnClick}>
          <Avatar className="avatar" src={avatar} />
          <h3 className="price">
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            EGP
          </h3>
          <h5 className="mb-3">{description}</h5>
          <p>
            <LocationOnOutlined /> {location.name}
          </p>
          <div className="d-flex" style={{ gap: 40 }}>
            <p>
              <Fullscreen /> {area} M<sup>2</sup>
            </p>
            {rooms && (
              <p>
                <Bed /> {rooms}
              </p>
            )}
            {bathrooms && (
              <p>
                <Shower /> {bathrooms}
              </p>
            )}
          </div>
        </div>
      </Card>
    </>
  );
};
export default CardD;
