import React from "react";
import { Container } from "react-bootstrap";
// import Sider from "antd/lib/layout/Sider";
import { useParams } from "react-router-dom";
// import FilteredCard from "../../component/filteredCard";
import "./style.css";
import ListingSection from "../../component/listingSection";
import Sider from "../../component/sider";
import { Button, Form, Input, Select } from "antd";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default function ListOfProperties() {
  const params = useParams();
  console.log(params);
  // const formRef = React.useRef(null);
  const onGenderChange = (value) => {
    console.log(value);
  };
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <Container>
        <h1>hello</h1>
        <Form
          {...layout}
          // ref={formRef}
          name="control-ref"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            name="note"
            label="Note"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </>
  );
}
