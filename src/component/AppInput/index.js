import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { transApi, transDash } from "../../context/lang";
import "./main.css";
import { Form, Input, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
const { Option } = Select;

const AppInput = ({
  onChange,
  name,
  label,
  data,
  value,
  input,
  textArea,
  required,
  type,
}) => {
  const [num, setNum] = useState(0);
  const handleNumber = (i) => {
    console.log(i.target.value.toLocaleString());
    const commas = i.target.value.toLocaleString();
    type === "number" && setNum(commas);
  };
  useEffect(() => {
    console.log(num);
  }, [num]);
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
        {input ? (
          <Input type={type} onChange={handleNumber} value={num} />
        ) : (
          textArea && <TextArea rows={3} />
        )}
      </Form.Item>
    </>
  );
};

export default AppInput;
