import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { Paper, Typography, List, ListItem } from '@material-ui/core';
import { getPastMatches } from "../api/dota.api";

import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import MatchField from "./MatchField";

function PastMatches() {
    const [pastMatches, setPastMatches] = useState([]);

    useEffect(() => {
        async function loadMatches() {
          const res =await getPastMatches();
          setPastMatches(res.data)
        }
        loadMatches();
    }, []);

  return (
    <>
      <Card style={{ maxHeight: '400px', maxWidth: '600px' }} className="container-md ">
      <Card.Header >Partidos Recientes</Card.Header>
        <ListGroup className="overflow-auto">
          {pastMatches.map((match, index) => (
            <NavLink to={`/match/${match.match_id}`} key={index}>
              <ListGroup.Item>
                <MatchField data={match}/>
              </ListGroup.Item>
            </NavLink>
          ))}
        </ListGroup>
      </Card>
    </>
  );
}

export default PastMatches;