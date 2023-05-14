import React from "react";
import "antd/dist/antd.css";
import { transDash } from "../../context/lang";
import "./main.css";
import { Form, Select } from "antd";
const { Option } = Select;

const AppSelect = ({ onChange, name, label, data, value, required }) => {
  const placeHolder = "Select";
  return (
    <>
      <Form.Item
        name={name}
        label={label}
        rules={[
          {
            required: required,
          },
        ]}
      >
        <Select
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
          allowClear
        >
          {data.map((item) => (
            <Option key={item.key || item.id} value={item.key}>
              {item.name || transDash(item)}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </>
  );
};

export default AppSelect;
