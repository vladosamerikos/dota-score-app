import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import CubeImage from '../images/cube.svg';
import LeagueImage from '../images/leaguicon.svg';
import {formatearFecha, convertirDuracion} from '../utils';
import Clock from '../images/clock.svg'

function MatchDetails({ matchData }) {
	return (
		<div>
			<Card
				style={{ maxHeight: '400px', maxWidth: '600px' }}
				className='container-md p-0 mt-5'
			>
				<Card.Header className=' container-md bg-dark'>
					<img
						className='icon'
						width={25}
						height={25}
						src={LeagueImage}
						alt='Mi imagen SVG'
					/>
					<span className='card-title'> {matchData.league.name}</span>
				</Card.Header>
				<Card.Header className='bg-dark'>
					<img
						className='icon'
						width={25}
						height={25}
						src={CubeImage}
						alt='Mi imagen SVG'
					/>
					<span className='card-title'> Resultado</span>{' '}
				</Card.Header>

				
        <div className="card-content">
          <div className="teams-data">
            <div className="team team-radiant">{matchData.radiant_team.name}</div>
            <div className="match-info">
              <div className="text-center game-duration"> <img className='small-icon' src={Clock} alt="reloj" /> {convertirDuracion(matchData.duration)}</div>
              <div className="text-center game-score">{matchData.radiant_score} -{' '}{matchData.dire_score}</div>
              <div className="text-center small-date">{formatearFecha(matchData.start_time)}</div>
            </div>
            <div className="team team-dire">{matchData.dire_team.name}</div>

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
