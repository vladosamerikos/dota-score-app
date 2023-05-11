import axios from 'axios'

export const getPastMatches = () => {
    return axios.get('https://api.opendota.com/api/proMatches')
}

export const getMatchDetail = (matchId) => {
    return axios.get(`https://api.opendota.com/api/matches/${matchId}`)
}