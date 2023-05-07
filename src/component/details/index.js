import React from "react";
import { Container, Row } from "react-bootstrap";
import AppCard from "../AppCard";
import { Know, List, Search } from "../../services/HomeDetails";

const Details = () => {
  return (
    <>
      <Container className="details">
        <Row className="my-5">
          <h4>SEARCH</h4>
          {Search.map(({ link, imgIcon, title, description, newb }) => (
            <AppCard
              key={link}
              link={link}
              imgIcon={imgIcon}
              title={title}
              description={description}
              newb={newb}
            />
          ))}
        </Row>

        <Row className="my-5" gap="3">
          <h4>KNOW</h4>
          {Know.map((item) => (
            <AppCard
              key={item.link}
              link={item.link}
              imgIcon={item.imgIcon}
              title={item.title}
              description={item.description}
              newb={item.newb}
            />
          ))}
        </Row>

        <Row className="my-5">
          <h4>LIST</h4>
          {List.map((item) => (
            <AppCard
              key={item.link}
              link={item.link}
              imgIcon={item.imgIcon}
              title={item.title}
              description={item.description}
              newb={item.newb}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Details;
