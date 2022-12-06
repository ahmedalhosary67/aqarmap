import React from "react";
import { Badge, Card } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import "antd/dist/antd.css";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { transApi } from "../../context/lang";

const AppCard = (props) => {
  const { link, title, imgIcon, newb, description } = props;
  const navigate = useNavigate();
  const gridStyle = {
    width: "fit-content",
    padding: "10px 20px"
  };
  return (
    <Col className="mb-4" md="4">
      <Card.Grid style={gridStyle} onClick={() => navigate(link)}>
        <Stack direction="row" gap={2}>
          <img alt="icon" src={imgIcon} />
          <Card.Meta
            title={
              <>
                <Stack direction="row" gap={2}>
                  <span>{transApi(title)}</span>
                  {newb && (
                    <Badge
                      count="NEW"
                      style={{ background: "#f9a825", color: "#000" }}
                    />
                  )}
                </Stack>
              </>
            }
            description={description}
          />
        </Stack>
      </Card.Grid>
    </Col>
  );
};

export default AppCard;
