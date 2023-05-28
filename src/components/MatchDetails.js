import Card from 'react-bootstrap/Card';
import CubeImage from '../images/cube.svg';
import LeagueImage from '../images/leaguicon.svg';
import { formatearFecha, convertirDuracion } from '../utils';
import Clock from '../images/clock.svg';
import React from 'react';
import heroesData from '../dotaconstants/heroes.json';

const IMAGE_BASE_URL = 'http://cdn.dota2.com';

function MatchDetails({ matchData }) {
	const players = matchData.players;
	const radiantWon = matchData.radiant_win;
	const radiantPlayers = players.filter((player) => player.isRadiant);
	const direPlayers = players.filter((player) => !player.isRadiant);
	const picksBans = matchData.picks_bans;
	const getHeroData = (heroId) => {
		return heroesData[heroId];
	};
	return (
		<div style={{  height: "70vh"}}>
			<Card className='container-sm p-0 mt-5 mb-5'>
				<Card.Header className='bg-dark'>
					<img className='icon' src={LeagueImage} alt='league icon' />
					<span className='card-title'> {matchData.league.name}</span>
				</Card.Header>
				<Card.Header className='bg-dark'>
					<img className='icon' src={CubeImage} alt='cube icon' />
					<span className='card-title'> Resultado</span>{' '}
				</Card.Header>

				<div className='card-content'>
					<div className='teams-data'>
						<div className='team team-radiant'>
							<img
								className='team-logo'
								src={matchData.radiant_team.logo_url}
								alt='radiant logo'
							/>{' '}
							<div className='team-name'>
								{radiantWon ? (
									<span className='radiant-result result result-win-text'>
										win
									</span>
								) : (
									<span className='radiant-result result result-lose-text'>
										loss
									</span>
								)}
								{matchData.radiant_team.name}
							</div>
						</div>
						<div className='match-info'>
							<div className='text-center game-duration'>
								{' '}
								<img
									className='small-icon'
									src={Clock}
									alt='reloj'
								/>{' '}
								{convertirDuracion(matchData.duration)}
							</div>
							<div className='text-center game-score'>
								{matchData.radiant_score} -{' '}
								{matchData.dire_score}
							</div>
							<div className='text-center small-date'>
								{formatearFecha(matchData.start_time)}
							</div>
						</div>
						<div className='team team-dire'>
							<div className='team-name'>
								{radiantWon ? (
									<span className='dire-result result result-lose-text'>
										loss
									</span>
								) : (
									<span className='dire-result result result-win-text'>
										win
									</span>
								)}
								{matchData.dire_team.name}
							</div>
							<img
								className='team-logo'
								src={matchData.dire_team.logo_url}
								alt='dire logo'
							/>{' '}
						</div>
					</div>
					<div className='match-stats'>
						<div className='radiant-players'>
							{radiantPlayers.map((player) => {
								const heroData = getHeroData(player.hero_id);
								const playerContainerClass =
									'player-hero radiant';
								return (
									<div
										className={playerContainerClass}
										key={player.account_id}
									>
										<img
											className='hero-icon'
											src={`${IMAGE_BASE_URL}${heroData.img}`}
											alt={heroData.localized_name}
										/>
										<span className='small-text'>
											{player.personaname}
										</span>
									</div>
								);
							})}
						</div>
						<div className='dire-players'>
							{direPlayers.map((player) => {
								const heroData = getHeroData(player.hero_id);
								const playerContainerClass = 'player-hero dire';
								return (
									<div
										className={playerContainerClass}
										key={player.account_id}
									>
										<img
											className='hero-icon'
											src={`${IMAGE_BASE_URL}${heroData.img}`}
											alt={heroData.localized_name}
										/>
										<span className='small-text'>
											{player.personaname}
										</span>
									</div>
								);
							})}
						</div>
					</div>
					<div className='visual-info'></div>
				</div>
			</Card>
		</div>
	);
}

export default MatchDetails;
