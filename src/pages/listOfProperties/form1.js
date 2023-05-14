import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./style.css";
import AppSelect from "../../component/AppSelect";
import { listingSection, propertyType } from "../../services/formData";
import governorates from "../../services/governorates.json";
import cities from "../../services/cities.json";
import { Cascader, Form } from "antd";

export default function Form1() {
  const [citiesFiltered, setCitiesFiltered] = useState(null);
  // const [city, setCity] = useState();

  const onChangeGovernorate = (value, item) => {
    setCitiesFiltered(cities.filter((city) => city.governorate_id == value));
    console.log(value);
  };

  return (
    <>
      <Row>
        <Col md={6}>
          <Form.Item
            name="propertyType"
            label="Property Type"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Cascader
              options={propertyType.map((item) => ({
                label: item.name,
                value: item.key,
                children:
                  item.children &&
                  item.children.map((child) => ({
                    label: child.name,
                    value: child.key,
                  })),
              }))}
            />
          </Form.Item>
        </Col>
        <Col md={6}>
          <AppSelect
            name="listingSection"
            label="Listing Section"
            data={listingSection}
          />
        </Col>
        <Col md={4}>
          <AppSelect
            onChange={onChangeGovernorate}
            name="governorates"
            label="Governorates"
            data={governorates}
          />
        </Col>
        {citiesFiltered && (
          <Col md={4}>
            <AppSelect name="city" label="City" data={citiesFiltered} />
          </Col>
        )}
      </Row>
    </>
  );
}
