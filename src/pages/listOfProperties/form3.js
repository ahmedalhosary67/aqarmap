import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./style.css";
import { Button, Cascader, Form, Input, Select } from "antd";
import SelectTab from "../../component/selectTab";
import AppSelect from "../../component/AppSelect";
const { Option } = Select;

export default function Form3() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            // required: true,
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="area"
        label="Area"
        rules={[
          {
            // required: true,
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="rooms"
        label="Rooms"
        rules={[
          {
            // required: true,
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="bathrooms"
        label="Bathrooms"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
    </>
  );
}
