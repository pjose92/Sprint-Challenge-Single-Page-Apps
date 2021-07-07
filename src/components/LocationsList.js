import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Alert, ButtonGroup, Button } from "reactstrap";
import LocationCard from "./LocationCard";

export default function LocationList() {
  const [locations, setLocations] = useState([]);
  const [info, setInfo] = useState([]);
  const [baseUrl, setBaseUrl] = useState(
    "https://rickandmortyapi.com/api/location/"
  );

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(res => {
        setLocations(res.data.results);
        setInfo(res.data.info);
      })
      .catch(err => console.log(err));
  }, [baseUrl]);

  console.log(locations, info);
  return (
    <>
      <Row>
        <Col xs="12">
          <Alert color="light">
            {`${info.count} locations found!`}
            <ButtonGroup className="float-right">
              <Button
                onClick={() => info.prev && setBaseUrl(info.prev)}
                disabled={info.prev ? false : true}
              >
                Previous Page
              </Button>
              <Button
                onClick={() => info.next && setBaseUrl(info.next)}
                disabled={info.next ? false : true}
              >
                Next Page
              </Button>
            </ButtonGroup>
          </Alert>
        </Col>
      </Row>
      <Row className="character-list">
        {locations.map(location => (
          <LocationCard key={location.id} location={location} />
        ))}
      </Row>
    </>
  );
}