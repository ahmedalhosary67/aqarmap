import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import AppSelect from "../../component/AppSelect";
import AppInput from "../../component/AppInput";
import {
  Market,
  Registered,
  View,
  paymentMethod,
  typeOfFinish,
  yearOfBuilding,
} from "../../services/formData";
import { Form, Select, Switch } from "antd";
import { WhatsApp } from "@mui/icons-material";
import { useState } from "react";
const { Option } = Select;
const selectBefore = (
  <Select defaultValue="egy">
    <Option value="egy">
      <img src="image/egypt.svg" /> +20
    </Option>
  </Select>
);

const formSections1 = [
  {
    name: "title_en",
    label: "Title in English",
    required: true,
  },
  {
    name: "description_en",
    label: "Description in English",
    textArea: true,
    required: true,
  },
  {
    name: "title_ar",
    label: "Title in Arabic",
  },
  {
    name: "description_ar",
    label: "Description in Arabic",
    textArea: true,
  },
  {
    name: "youtubeVideoUrl",
    label: "Youtube Video Url",
  },
];

const formSections2 = [
  {
    name: "size",
    label: "Size (in meters)",
    type: "number",
    required: true,
    width: 2,
  },
  {
    name: "view",
    label: "View",
    data: View,
    select: true,
    width: 2,
  },
  {
    name: "price",
    label: "Price - EGP",
    type: "number",
    required: true,
    width: 2,
  },
  {
    name: "paymentMethod",
    label: "Payment Method",
    data: paymentMethod,
    select: true,
    width: 2,
  },
  {
    name: "rooms",
    label: "Rooms",
    type: "number",
    required: true,
    width: 2,
  },
  {
    name: "floor",
    label: "Floor",
    type: "number",
    required: true,
    width: 2,
  },
  {
    name: "bathrooms",
    label: "Bathrooms",
    type: "number",
    required: true,
    width: 2,
  },
  {
    name: "yearOfBuilding",
    label: "Year Of Building",
    data: yearOfBuilding,
    select: true,
    width: 2,
  },
  {
    name: "typeOfFinished",
    label: "Type Of Finished",
    data: typeOfFinish,
    select: true,
    width: 2,
  },
  {
    name: "shahrAqary",
    label: "Registered with Shahr Aqary?",
    data: Registered,
    required: true,
    select: true,
    width: 3,
  },
  {
    name: "PropertyTypeInMarket",
    label: "Property Type In Market",
    data: Market,
    select: true,
    width: 3,
  },
];

export default function Form2() {
  const [checked, setcChecked] = useState(true);
  const onChange = (e) => {
    setcChecked(!checked);
    console.log(`switch to ${e}`);
  };
  return (
    <>
      <Container className="mb-4">
        {formSections1.map((item) => (
          <AppInput
            key={item.name}
            name={item.name}
            label={item.label}
            textArea={item.textArea}
            required={item.required}
          />
        ))}
      </Container>
      <h3 className="subTitle2">Advertiser Details</h3>
      <Container>
        {/* <p>
          If you want to update the current phone number, please go to
          <a href="#">My Account</a>
        </p> */}
        <AppInput
          name="phoneNumber"
          label="Phone Number"
          addonBefore={selectBefore}
          required={true}
          type="number"
        />
        <Form.Item
          name="whatsApp"
          label={
            <div>
              <WhatsApp color="success" />
              <span>This number has WhatsApp</span>
            </div>
          }
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Switch checked={checked} onChange={onChange} />
        </Form.Item>
      </Container>
      <h3 className="subTitle2">Property Details</h3>
      <Row>
        {formSections2.map((x) =>
          x.select ? (
            <Col key={x.name} md={x.width}>
              <AppSelect
                name={x.name}
                label={x.label}
                data={x.data}
                required={x.required}
              />
            </Col>
          ) : (
            <Col key={x.name} md={x.width}>
              <AppInput
                name={x.name}
                label={x.label}
                type={x.type}
                required={x.required}
              />
            </Col>
          )
        )}
      </Row>
      <h3 className="subTitle2">Address</h3>
      <Container>
        <AppInput
          name="propertyAddress"
          label="Property Address"
          required={true}
        />
      </Container>
    </>
  );
}
