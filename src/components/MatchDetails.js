
function MatchDetails({matchData}) {
  return (
    <div>
      <h1>Detalles del partido</h1>
      <div>
        <div>
          <strong>Radiant:</strong> {matchData.radiant_team.name}
        </div>
        <div>
          <strong>Dire:</strong> {matchData.dire_team.name}
        </div>
        <div>
          <strong>Puntuación:</strong> {matchData.radiant_score} - {matchData.dire_score}
        </div>
        <div>
          <strong>Liga:</strong> {matchData.league.name}
        </div>
        <div>
          <strong>Fecha:</strong> {new Date(matchData.start_time * 1000).toLocaleString()}
        </div>
        {/* mostrar más detalles del partido según tus necesidades */}
      </div>
    </div>
  );
}

export default MatchDetails;
