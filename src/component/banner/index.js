import React from "react";
import { Badge } from "antd";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import data from "../../services/data.json";
import "./main.css";
import { Button, Stack } from "@mui/material";
import { trans } from "../../context/lang";

export default function Banner() {
  const navigate = useNavigate();
  return (
    <div>
      <Card className="banner">
        <Container>
          <Row>
            <Col xs={12} md={6} xl={5}>
              <h1 className="mb-5">
                <Stack direction={"column"} gap={1}>
                  <Stack direction={"row"} gap={1}>
                    <span className="total">{data.length}</span>
                    <span>{trans("Properties")}</span>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    For
                    <span
                      onClick={() => navigate("properties/sale")}
                      className="sale1"
                    >
                      Sale
                    </span>
                    &
                    <span
                      onClick={() => navigate("properties/rent")}
                      className="sale1"
                    >
                      Rent
                    </span>
                  </Stack>
                </Stack>
              </h1>
              <Stack direction={"row"} gap={1} className="button-cont">
                <Button fullWidth onClick={() => navigate("searchFilter")}>
                  Properties
                </Button>
                <Button fullWidth onClick={() => navigate("compounds")}>
                  Compound
                  <Badge count="NEW" className="NewBadge" />
                </Button>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}
