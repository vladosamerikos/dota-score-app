import React from "react";
import "../App.css"; 

function MatchField({key, data}) {
  const date = new Date(data.start_time * 1000);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const time = date.toLocaleTimeString('es-ES', { hour12: false });
  const timeWithoutSeconds = time.slice(0, -3);
  console.log(data)
  return (
    <div className="match-field" key={data.match_id}>
      <div className="match-field-body">
        <div className="match-field-radiant-team">
          {data.radiant_name}
        </div>

        <div className="match-field-score">
        {data.radiant_score}:{data.dire_score}
        </div>
        <div className="match-field-date">
          <div className="match-field-date-day">{`${day}/${month}`}</div>
          <div className="match-field-date-time">{timeWithoutSeconds}</div>
        </div>
        
        <div className="match-field-dire-team">
          {data.dire_name}
        </div>
      </div>
      
      <div className="match-field-footer">
        {data.league_name}
      </div>

    </div>
  );
}

export default MatchField;