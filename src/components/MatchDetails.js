import Card from 'react-bootstrap/Card';
import CubeImage from '../images/cube.svg';
import LeagueImage from '../images/leaguicon.svg';
import {formatearFecha, convertirDuracion} from '../utils';
import Clock from '../images/clock.svg'
import React from 'react';

function MatchDetails({ matchData }) {
	return (
		<div>
			<Card
				className='container-sm p-0 mt-5 mb-5'
			>
				<Card.Header className='bg-dark'>
					<img
						className='icon'
						src={LeagueImage}
						alt='Mi imagen SVG'
					/>
					<span className='card-title'> {matchData.league.name}</span>
				</Card.Header>
				<Card.Header className='bg-dark'>
					<img
						className='icon'
						src={CubeImage}
						alt='Mi imagen SVG'
					/>
					<span className='card-title'> Resultado</span>{' '}
				</Card.Header>

				
        <div className="card-content">
          <div className="teams-data">
            <div className="team team-radiant"><img className='team-logo' src={matchData.radiant_team.logo_url} alt="radiant logo"  /> {matchData.radiant_team.name}</div>
            <div className="match-info">
              <div className="text-center game-duration"> <img className='small-icon' src={Clock} alt="reloj" /> {convertirDuracion(matchData.duration)}</div>
              <div className="text-center game-score">{matchData.radiant_score} -{' '}{matchData.dire_score}</div>
              <div className="text-center small-date">{formatearFecha(matchData.start_time)}</div>
            </div>
            <div className="team team-dire">{matchData.dire_team.name}<img className='team-logo' src={matchData.dire_team.logo_url} alt="dire logo"  /> </div>

          </div>
          <div className="match-stats">
            <div className='hero-stats'></div>
            <div className='hero-stats'></div>

          </div>
          <div className="visual-info"></div>

        </div>
			</Card>
		</div>
	);
}

export default MatchDetails;
