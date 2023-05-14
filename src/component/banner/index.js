import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import data from "../../services/data.json";
import "./main.css";
import { Button, Stack } from "@mui/material";
import { trans } from "../../context/lang";
import { Lang } from "./../../context/lang.js";

export default function Banner() {
  const navigate = useNavigate();
  const { lang } = React.useContext(Lang);
  return (
    <Card className={lang === "en" ? "banner" : "banner rotateimage"}>
      <Container className={lang === "en" ? "" : " rotateimage"}>
        <Row>
          <Col xs={12} md={6} xl={5}>
            <h1 className="titleBanner mb-5">
              <Stack direction={"column"} gap={1}>
                <Stack direction={"row"} gap={1}>
                  <span className="total">{data.length}</span>
                  <span>{trans("Properties")}</span>
                </Stack>
                <Stack direction={"row"} gap={1}>
                  {trans("For")}
                  <span
                    onClick={() => navigate("properties/sale")}
                    className="sale1"
                  >
                    {trans("Sale")}
                  </span>
                  &
                  <span
                    onClick={() => navigate("properties/rent")}
                    className="sale1"
                  >
                    {trans("Rent")}
                  </span>
                </Stack>
              </Stack>
            </h1>
            <Stack direction={"row"} gap={1} className="button-cont">
              <Button
                fullWidth
                onClick={() => navigate("searchFilter?type=properties")}
              >
                {trans("Properties")}
              </Button>
              <Button
                fullWidth
                onClick={() => navigate("searchFilter?type=compounds")}
              >
                {trans("Compounds")}
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
