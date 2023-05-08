import React, { useState, useEffect } from "react";
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
    <Paper style={{ maxHeight: '400px', maxWidth: '800px', overflow: 'auto' }}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Partidos Recientes
      </Typography>
      <List>
        {pastMatches.map((match, index) => (
          <ListItem button key={index}>
            <MatchField data={match}/>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default PastMatches;