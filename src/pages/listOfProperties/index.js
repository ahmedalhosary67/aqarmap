import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import { Button, Form } from "antd";
import Form1 from "./form1";
import Form2 from "./form2";
import { useNavigate } from "react-router-dom";
import { Data } from "../../context/context";
import allData from "../../services/data.json";
import axios from "axios";

export default function ListOfProperties() {
  const navigate = useNavigate();
  const [form1, setForm1] = React.useState(true);
  const [data, setData] = React.useState(Data);
  const [listingData, setListingData] = React.useState({});

  const handleNext = (values) => {
    setListingData({ ...listingData, ...values });
    setForm1(false);
  };
  const onFinish = (values, e) => {
    setListingData({
      _id: allData.length + 1,
      ...listingData,
      ...values,
      // propertyType: data.propertyType[data.propertyType.length - 1],
    });
    axios
      .post("http://localhost:3000/data", {
        ...listingData,
        ...values,
        // propertyType: data.propertyType[data.propertyType.length - 1],
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // navigate("/");
  };

  useEffect(() => {
    console.log(listingData);
  }, [listingData]);

  return (
    <>
      <Container className="body">
        <br />
        <h2>List property</h2>
        <br />
        <Form
          layout="vertical"
          name="control-ref"
          onFinish={form1 ? handleNext : onFinish}
        >
          {form1 ? <Form1 /> : <Form2 />}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {form1 ? "Next" : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </>
  );
}
