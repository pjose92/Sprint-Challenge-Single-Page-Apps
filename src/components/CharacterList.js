import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Row, Col, Alert, ButtonGroup, Button } from "reactstrap";

export default function CharacterList({match, history}) {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([]);
  const [info, setInfo] = useState([]);
  const [isSingleView, setIsSingleView] = useState(false);
  const [search, setSearch] = useState({term: "", filter: "" });


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setChars(res.data.results);
        setInfo(res.data.info);
      })
      .catch(err => console.log(err));
  }, [search]);

  const handleSearch = term => {
    setSearch({ term: term, filter: `?name=${term}`});
  };

  console.log(info);

  return (
    <>
      <Row className="mb-3">
        <Col xs="12">
          <SearchForm handleSearch={handleSearch} />
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Alert color="light">
            {`${info.count} characters found!`}
            <ButtonGroup className="float-right">
              <Button
                onClick={() => {
                  info.prev &&
                    setSearch({
                      ...search,
                      filter: `?${info.prev.split("?").pop()}`
                    });
                }}
                disabled={info.prev ? false : true}
              >
                Previous Page
              </Button>
              <Button
                onClick={() => {
                  info.next &&
                    setSearch({
                      ...search,
                      filter: `?${info.next.split("?").pop()}`
                    });
                }}
                disabled={info.next ? false : true}
              >
                Next Page
              </Button>
            </ButtonGroup>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col xs={`${isSingleView ? `6` : `12`} `}>
          <Row className="character-list">
            {chars.map(char => (
              <CharacterCard
                key={char.id}
                char={char}
                setIsSingleView={setIsSingleView}
              />
            ))}
          </Row>
        </Col>
        <Col
          xs={`${isSingleView ? `6` : `12`} `}
          style={{
            position: "-webkit-sticky",
            position: "sticky",
            top: 0,
            alignSelf: "flex-start"
          }}
        >
          <Row className="character-list">
            {isSingleView && (
              <Route
                path="/characters/:id"
                render={renderProps => (
                  <CharacterCard
                    {...renderProps}
                    char={
                      chars.filter(
                        char => char.id === Number(renderProps.match.params.id)
                      )[0]
                    }
                    isSingleView={isSingleView}
                    setIsSingleView={setIsSingleView}
                  />
                )}
              />
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
}
