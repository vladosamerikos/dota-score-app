import React from "react";

function NextMatches({ nextMatches }) {
  return (
    <div>
      <h2>Próximos Partidos</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Equipo Radiant</th>
            <th>Equipo Dire</th>
            <th>Torneo</th>
          </tr>
        </thead>
        <tbody>
          {nextMatches.map((match) => (
            <tr key={match.match_id}>
              <td>{new Date(match.start_time * 1000).toLocaleString()}</td>
              <td>{match.radiant_name}</td>
              <td>{match.dire_name}</td>
              <td>{match.league_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NextMatches;
