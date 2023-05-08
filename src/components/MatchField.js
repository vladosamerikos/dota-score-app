import React from "react";

function MatchField({key, data}) {
  const date = new Date(data.start_time * 1000);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const time = date.toLocaleTimeString('es-ES', { hour12: false });
  const timeWithoutSeconds = time.slice(0, -3);
  console.log(data)
  return (
    <>
      <tr key={data.match_id}>
        <td>{`${day}/${month}`}</td>
        <td>{timeWithoutSeconds}</td>
        <td>{data.radiant_name}  {data.radiant_score}</td>
        <td>{data.dire_score}  {data.dire_name}</td>
        <td>{data.league_name}</td>
      </tr> 
    </>
  );
}

export default MatchField;