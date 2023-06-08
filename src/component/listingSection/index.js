import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Table } from "react-bootstrap";
import originalFakeData from "../../services/data.json";
import { Data } from "../../context/context";
import { Card } from "antd";
import { LocationOnOutlined } from "@mui/icons-material";

export default function ListingSection() {
  // const { data, setData } = useContext(Data);
  const [allData, setAllData] = useState(originalFakeData);
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState([]);
  const params = useParams();

  useEffect(() => {
    setCardData(allData.find((item) => item._id === params.id));
    // console.log(cardData);
    setLoading(false);
  }, [cardData]);

  return (
    <>
      {loading ? (
        <p>loading....</p>
      ) : (
        <section>
          <Row>
            <Col sm={12}></Col>
          </Row>
          <Card className="card-listing">
            <img src={cardData.img} alt="" className="w-100 mb-3" />
            <p className="upperCase">{cardData.type}</p>
            <h3>{cardData.price} EGP</h3>
            <h5 className="upperCase">{cardData.description}</h5>
            <p>
              <LocationOnOutlined /> {cardData.location.name}
            </p>
            <h3>Listing Details</h3>
            <Table striped borderless>
              <thead>
                <tr>
                  <td>Size (in meters)</td>
                  <td>
                    {cardData.area} M<sup>2</sup>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Room</td>
                  <td>{cardData.rooms}</td>
                </tr>
                <tr>
                  <td>Baths</td>
                  <td>{cardData.bathrooms}</td>
                </tr>
                <tr>
                  <td>Finish Type</td>
                  <td>{cardData.finishType}</td>
                </tr>
                <tr>
                  <td>View</td>
                  <td>{cardData.view}</td>
                </tr>
                <tr>
                  <td>Year Built / Deliver Year</td>
                  <td>{cardData.yearBuilt}</td>
                </tr>
                <tr>
                  <td>Listing ID</td>
                  <td>{cardData._id}</td>
                </tr>
                <tr>
                  <td>Publish Date</td>
                  <td>{cardData.publishDate}</td>
                </tr>
                <tr>
                  <td>Price Per Meter</td>
                  <td>
                    {Math.round(cardData.price / cardData.area)} EGP/M
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{cardData.price} EGP</td>
                </tr>
                <tr>
                  <td>Payment Method</td>
                  <td>{cardData.paymentMethod}</td>
                </tr>
                <tr>
                  <td>Seller Role</td>
                  <td>{cardData.sellerRole}</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </section>
      )}
    </>
  );
}
