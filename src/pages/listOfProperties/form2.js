import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./style.css";
import { Button, Cascader, Form, Input, Select } from "antd";
import SelectTab from "../../component/selectTab";
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
const { Option } = Select;

export default function Form2() {
  return (
    <>
      <Container className="mb-4">
        <AppInput
          name="title_en"
          label="Title in English"
          input
          required={true}
        />
        <AppInput
          name="description_en"
          label="Description in English"
          textArea
          required={true}
        />

        <AppInput name="title_ar" label="Title in Arabic" input />
        <AppInput
          name="description_ar"
          label="Description in Arabic"
          textArea
        />
        <AppInput name="youtubeVideoUrl" label="Youtube Video Url" input />
      </Container>
      <h3 className="subTitle">Advertiser Details</h3>
      <Container>
        <AppInput
          name="title_en"
          label="Title in English"
          input
          required={true}
        />
      </Container>
      <h3 className="subTitle">Property Details</h3>
      <Row>
        <Col md={2}>
          <AppInput
            name="size"
            label="Size (in meters)"
            input
            type="number"
            required={true}
          />
        </Col>
        <Col md={2}>
          <AppSelect name="view" label="View" data={View} />
        </Col>
        <Col md={2}>
          <AppInput
            name="price"
            label="Price - EGP"
            input
            type="number"
            required={true}
          />
        </Col>
        <Col md={2}>
          <AppSelect
            name="paymentMethod"
            label="Payment Method"
            data={paymentMethod}
          />
        </Col>
        <Col md={2}>
          <AppInput
            name="rooms"
            label="Rooms"
            input
            type="number"
            required={true}
          />
        </Col>
        <Col md={2}>
          <AppInput
            name="floor"
            label="Floor"
            input
            type="number"
            required={true}
          />
        </Col>
        <Col md={2}>
          <AppInput
            name="bathrooms"
            label="Bathrooms"
            input
            type="number"
            required={true}
          />
        </Col>
        <Col md={2}>
          <AppSelect
            name="yearOfBuilding"
            label="Year Of Building"
            data={yearOfBuilding}
          />
        </Col>
        <Col md={2}>
          <AppSelect
            name="typeOfFinished"
            label="Type Of Finished"
            data={typeOfFinish}
          />
        </Col>
        <Col md={3}>
          <AppSelect
            name="shahrAqary"
            label="Registered with Shahr Aqary?"
            data={Registered}
            required={true}
          />
        </Col>
        <Col md={3}>
          <AppSelect
            name="PropertyTypeInMarket"
            label="Property Type In Market"
            data={Market}
          />
        </Col>
      </Row>
      <h3 className="subTitle">Address</h3>
      <Container>
        <AppInput
          name="propertyAddress"
          label="Property Address"
          input
          required={true}
        />
      </Container>
    </>
  );
}
