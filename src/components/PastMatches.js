import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Paper, Typography, List, ListItem } from '@material-ui/core';
import { getPastMatches, getTeamLogo } from '../api/dota.api';
import Loader from './loaders/Loader';

import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import MatchField from './MatchField';

import SchedudleImage from '../images/schedudle.svg';

function PastMatches() {
	const [pastMatches, setPastMatches] = useState([]);
	const [loading, setLoading] = useState(true);

useEffect(() => {
  async function loadMatches() {
    const res = await getPastMatches();
    const filteredMatches = res.data.filter(match => match.radiant_name !== null).slice(0, 5);
    const matchesWithLogos = await Promise.all(filteredMatches.map(async (match) => {
      const radiantLogo = await getTeamLogoWithDelay(match.radiant_team_id);
      const direLogo = await getTeamLogoWithDelay(match.dire_team_id);
      return {
        ...match,
        radiant_logo: radiantLogo,
        dire_logo: direLogo
      };
    }));
    setPastMatches(matchesWithLogos);
	setLoading(false);
  }

  const delay = 1000; // Tiempo de retraso en milisegundos entre cada solicitud de logo

  const getTeamLogoWithDelay = async (teamId) => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const logo = await getTeamLogo(teamId);
        resolve(logo);
      }, delay);
    });
  };

  loadMatches();
}, []);

	
	return (
		<>
			<Card
				style={{ height: '400px', maxWidth: '600px' }}
				className='container-md p-0 mt-5 mb-5'
			>
				<Card.Header className='bg-dark'>
					<img
						className='icon'
						src={SchedudleImage}
						alt='schedudle'
					/>{' '}
					<span className='card-title'> Partidos Recientes</span>
				</Card.Header>
				<ListGroup className='overflow-auto'>
				{loading ? (
				<Loader /> 
			  ) : (
				pastMatches.map((match, index) => (
				  <NavLink to={`/match/${match.match_id}`} key={index}>
					<MatchField data={match}/>
				  </NavLink>
				))
			  )}
				</ListGroup>
			</Card>
		</>
	);
}

export default PastMatches;
