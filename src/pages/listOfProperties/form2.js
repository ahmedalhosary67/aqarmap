import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./style.css";
import { Button, Cascader, Form, Input, Select } from "antd";
import SelectTab from "../../component/selectTab";
import AppSelect from "../../component/AppSelect";

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
export default function Form2() {
  const [state, setState] = useState([]);
  const [area, setArea] = useState(null);
  const [location, setLocation] = useState(null);

  const onChangeCity = (value) => {
    propertyType.find((item) => item.value == value).hasOwnProperty("children")
      ? setArea(propertyType.find((item) => item.value == value).children)
      : setArea(null);
    console.log(value);
  };
  const onChangeArea = (value) => {
    area.find((item) => item.value == value).hasOwnProperty("children")
      ? setLocation(propertyType.find((item) => item.value == value).children)
      : setLocation(null);
    console.log(value);
  };
  const onChangeLocation = (value) => {
    console.log(value);
  };

  return (
    <>
      <AppSelect
        onChange={onChangeCity}
        name="city"
        label="City"
        data={propertyType}
      />

      {area && (
        <AppSelect
          onChange={onChangeArea}
          name="area"
          label="Area"
          data={area}
        />
      )}
      {location && (
        <AppSelect
          onChange={onChangeLocation}
          name="location"
          label="Location"
          data={area}
        />
      )}
    </>
  );
}
