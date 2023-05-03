import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import { Button, Form } from "antd";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
export default function ListOfProperties() {
  const [num, setNum] = React.useState(1);
  const [data, setData] = React.useState([]);

  const onFinish = (values) => {
    setData([...data, values]);
    num < 3 && setNum(num + 1);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Container>
        <br />
        <h2>List Your Property</h2>
        <br />
        <Form name="control-ref" onFinish={onFinish}>
          {num === 1 ? (
            <Form1 />
          ) : num == 2 ? (
            <Form2 />
          ) : num == 3 ? (
            <Form3 />
          ) : null}
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </>
  );
}
