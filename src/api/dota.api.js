import axios from 'axios'

export const getPastMatches = () => {
    return axios.get('https://api.opendota.com/api/proMatches')
}

export const getMatchDetail = (matchId) => {
    return axios.get(`https://api.opendota.com/api/matches/${matchId}`)
}

export const getTeamLogo = async (teamId) => {
    try {
      const response = await axios.get(`https://api.opendota.com/api/teams/${teamId}`);
      const teamData = response.data;
      return teamData.logo_url;
    } catch (error) {
      console.error('Error fetching team logo:', error);
      return null;
    }
  };
  