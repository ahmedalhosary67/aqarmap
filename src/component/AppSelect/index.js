import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";
import { transApi } from "../../context/lang";
import "./main.css";
import { Form, Select } from "antd";
const { Option } = Select;

const AppSelect = ({ onChange, name, label, data }) => {
  const navigate = useNavigate();

  return (
    <>
      <Form.Item
        name={name}
        label={label}
        rules={[
          {
            // required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={onChange}
          allowClear
        >
          {data.map((item) => (
            <Option key={item.key} value={item.key}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
};

export default AppSelect;
