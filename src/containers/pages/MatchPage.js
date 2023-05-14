import React, { useState, useEffect } from "react";
import { getMatchDetail } from "../../api/dota.api";
import { useParams } from "react-router-dom";
import Loader from "../../components/loaders/Loader"
import MatchDetails from "../../components/MatchDetails";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";

const MatchPage = () => {
    const { matchId } = useParams(); // obtener el id del partido de la URL
    const [matchData, setMatchData] = useState(null);
  
    useEffect(() => {
      async function loadDetails(matchId) {
        const res =await getMatchDetail(matchId);
        setMatchData(res.data)
      }
      loadDetails(matchId);
    }, [matchId]);
    console.log(matchData)
  
    if (!matchData) {
      return <Loader />;
    }

    return <FullWidthLayout>
        <MatchDetails matchData={matchData}/>
    </FullWidthLayout>;
};
  
export default MatchPage;