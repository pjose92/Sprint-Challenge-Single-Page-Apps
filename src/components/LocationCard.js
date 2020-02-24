import React from "react";
import { Col, Card, CardBody, CardTitle, CardText } from "reactstrap";

export default function LocationCard({ location }) {
  return (
    <Col xs="12" lg="4" className="mb-3">
        <Card>
            <CardBody>
                <CardTitle>
                    <strong>{location.name}</strong>
                </CardTitle>
                <CardText>
                    <small>{location.type && `Type: ${location.type}`}</small>
                    <br/>
                    <small>{location.dimension && `Dimension: ${location.dimension}`}</small>
                </CardText>
            </CardBody>
        </Card>
    </Col>
  )
}

