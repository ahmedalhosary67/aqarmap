import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import { Button, Form } from "antd";
import Form1 from "./form1";
import Form2 from "./form2";
import { useNavigate } from "react-router-dom";

export default function ListOfProperties() {
  const navigate = useNavigate();
  const [form1, setForm1] = React.useState(true);
  const [data, setData] = React.useState({});
  const { form } = Form.useForm();

  const handleNext = (values) => {
    setData({ ...data, ...values });
    setForm1(false);
  };
  const onFinish = (values, e) => {
    setData({
      ...data,
      ...values,
      // propertyType: data.propertyType[data.propertyType.length - 1],
    });
    navigate("/");
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

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
