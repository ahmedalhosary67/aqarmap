import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./style.css";
import { Button, Cascader, Form, Input, Select } from "antd";
import SelectTab from "../../component/selectTab";
import AppSelect from "../../component/AppSelect";
const { Option } = Select;

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const propertyType = [
  {
    value: "apartments",
    label: "Apartments",
    children: [
      {
        value: "apartmentsWithGarden",
        label: "Apartments with Garden",
      },
      {
        value: "studio",
        label: "Studio",
      },
      {
        value: "dublix",
        label: "Dublix",
      },
      {
        value: "roof",
        label: "Roof",
      },
      {
        value: "fullFloor",
        label: "Full Floor",
      },
    ],
  },
  {
    value: "furnished",
    label: "Furnished",
  },
  {
    value: "chalets",
    label: "Chalets",
  },
  {
    value: "villas",
    label: "Villas",
    children: [
      {
        value: "twinHouse",
        label: "Twin House",
      },
      {
        value: "townHouse",
        label: "Town House",
      },
      {
        value: "separateVilla",
        label: "Separate Villa",
      },
      {
        value: "palace",
        label: "Palace",
      },
    ],
  },
  {
    value: "land",
    label: "Land",
    children: [
      {
        value: "residentialLand",
        label: "Residential Land",
      },
      {
        value: "administrativeLand",
        label: "Administrative Land",
      },
      {
        value: "commercialLand",
        label: "Commercial Land",
      },
      {
        value: "farm",
        label: "Farm",
      },
    ],
  },
];

export default function Form1() {
  const onChange = (value) => {
    console.log(value.map((item) => item.label).join(", "));
    // value.map((item) => item.label).join(", ");
  };
  return (
    <>
      <Form.Item
        name="propertyType"
        label="Property Type"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Cascader options={propertyType} onChange={onChange} />
      </Form.Item>
    </>
  );
}
