import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import { Button, Form } from "antd";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import { useNavigate } from "react-router-dom";

export default function ListOfProperties() {
  const navigate = useNavigate();
  const [num, setNum] = React.useState(1);
  const [data, setData] = React.useState({});

  const handleNext = (values, item) => {
    setData({ ...data, ...values });
    num < 3 && setNum(num + 1);
  };
  const onFinish = (values, e) => {
    setData({ ...data, ...values });
    navigate("/");
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Container>
        <br />
        <h2>List your property</h2>
        <br />
        <Form
          layout="vertical"
          name="control-ref"
          onFinish={num < 3 ? handleNext : onFinish}
        >
          {num === 1 ? (
            <Form1 />
          ) : num == 2 ? (
            <Form2 />
          ) : num == 3 ? (
            <Form3 />
          ) : null}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {num < 3 ? "Next" : "Submit"}
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </>
  );
}
