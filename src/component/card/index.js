import React, { useCallback, useState } from "react";
import {
  Bed,
  Fullscreen,
  LocationOnOutlined,
  PhoneOutlined,
  Shower,
  WhatsApp,
} from "@mui/icons-material";
import { Avatar, Card, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
import "./style.css";

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
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  const handleOnClick = useCallback(
    () => navigate("/Listing/" + id, { push: true }),
    [navigate]
  );
  return (
    <>
      <Skeleton loading={loading} avatar active paragraph={{ rows: 4 }}>
        <Card
          className="mb-3"
          cover={
            <img alt="example" src={img} height={250} onClick={handleOnClick} />
          }
          style={{ cursor: "pointer" }}
          actions={[
            <WhatsApp
              key="whatsApp"
              context="WhatsApp"
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
            <h5 className="description mb-3">{description}</h5>
            <div className="mb-3">
              <LocationOnOutlined /> {location.name}
            </div>
            <div className="d-flex" style={{ gap: 40 }}>
              <div>
                <Fullscreen /> {area} M<sup>2</sup>
              </div>
              <div>
                {rooms && (
                  <>
                    <Bed /> {rooms}
                  </>
                )}
              </div>
              <div>
                {bathrooms && (
                  <>
                    <Shower /> {bathrooms}
                  </>
                )}
              </div>
            </div>
          </div>
        </Card>
      </Skeleton>
    </>
  );
};
export default CardD;
