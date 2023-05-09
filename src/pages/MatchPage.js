import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MatchDetails from "../components/MatchDetails";

const MatchPage = () => {
    const { matchId } = useParams(); // obtener el id del partido de la URL
    const [matchData, setMatchData] = useState(null);
  
    useEffect(() => {
      // hacer la petición a la API de OpenDota usando el id del partido
      fetch(`https://api.opendota.com/api/matches/${matchId}`)
        .then((response) => response.json())
        .then((data) => {
          setMatchData(data);
        });
    }, [matchId]);
    console.log(matchData)
  
    if (!matchData) {
      return <div>Cargando...</div>;
    }

    return <>
        <MatchDetails matchData={matchData}/>
    </>;
};
  
export default MatchPage;