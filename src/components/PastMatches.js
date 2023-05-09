import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { Paper, Typography, List, ListItem } from '@material-ui/core';
import MatchField from "./MatchField";
import "../App.css"; 

function PastMatches() {
    const [pastMatches, setPastMatches] = useState([]);

    useEffect(() => {
        fetch("https://api.opendota.com/api/proMatches")
        .then((response) => response.json())
        .then((data) => {
            setPastMatches(data);
        });
    }, []);

  return (
    <>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Partidos Recientes
      </Typography>
      <Paper style={{ maxHeight: '400px', maxWidth: '800px', overflow: 'auto' }}>
        <List>
          {pastMatches.map((match, index) => (
            <NavLink to={`/match/${match.match_id}`} key={index}>
              <ListItem button >
                <MatchField data={match}/>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Paper>
    </>
  );
}

export default PastMatches;