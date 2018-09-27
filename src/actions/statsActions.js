import { FETCH_COMPETITIONS, FETCH_CLUBS, FETCH_HISTORICAL_TABLE, FETCH_MOCK_SUPER_LEAGUE_TABLE } from './types';
import { BASE_PATH } from '../config/config';
import axios from 'axios';


export const fetchCompetitions = () => dispatch => {
	axios({
		url: BASE_PATH + '/v1/competitions/',
		method: 'get'
	})
	.then(res => dispatch({
		type: FETCH_COMPETITIONS,
		payload: res.data,
	}))
	.catch(error => console.error(error));
}


export const fetchCompetitionFootballClubs = (competitionId) => dispatch => {
	axios({
		url: BASE_PATH + '/v1/competitions/' + competitionId + '/',
		method: 'get'
	})
	.then(res => dispatch({
		type: FETCH_CLUBS,
		payload: res.data,
	}))
	.catch(error => console.error(error));
}


export const fetchCompetitionFootballClubHistoricalTable = (competitionName, footballClubName) => dispatch => {
	axios({
		url: BASE_PATH + '/v1/competition-results/' + encodeURIComponent(competitionName) + '/' + encodeURIComponent(footballClubName) + '/historical-table/',
		method: 'get'
	})
	.then(res => dispatch({
		type: FETCH_HISTORICAL_TABLE,
		payload: res.data,
	}))
	.catch(error => console.error(error));
}


export const fetchCompetitionFootballClubMockSuperLeagueTable = (season) => dispatch => {
	axios({
		url: `${BASE_PATH}/v1/competition-results/${season}/mock-super-league/`,
		method: 'get',
	})
	.then(res => dispatch({
		type: FETCH_MOCK_SUPER_LEAGUE_TABLE,
		payload: res.data,
	}))
	.catch(error => console.error(error));
}
