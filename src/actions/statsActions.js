import { FETCH_COMPETITIONS, FETCH_CLUBS, FETCH_HISTORICAL_TABLE } from './types';
import { BASE_PATH, USER, PASSWORD } from '../config/config';
import axios from 'axios';


export const fetchCompetitions = () => dispatch => {
	axios({
		url: BASE_PATH + '/competitions/',
		method: 'get',
		auth: {
			username: USER,
			password: PASSWORD,
		}
	})
	.then(res => dispatch({
		type: FETCH_COMPETITIONS,
		payload: res.data,
	}))
	.catch(error => console.error(error));
}


export const fetchCompetitionFootballClubs = (competitionId) => dispatch => {
	axios({
		url: BASE_PATH + '/competitions/' + competitionId + '/',
		method: 'get',
		auth: {
			username: USER,
			password: PASSWORD,
		}
	})
	.then(res => dispatch({
		type: FETCH_CLUBS,
		payload: res.data,
	}))
	.catch(error => console.error(error));
}


export const fetchCompetitionFootballClubHistoricalTable = (competitionName, footballClubName) => dispatch => {

	axios({
		url: BASE_PATH + '/competition-results/' + encodeURIComponent(competitionName) + '/' + encodeURIComponent(footballClubName) + '/historical-table/',
		method: 'get',
		auth: {
			username: USER,
			password: PASSWORD,
		}
	})
	.then(res => dispatch({
		type: FETCH_HISTORICAL_TABLE,
		payload: res.data,
	}))
	.catch(error => console.error(error));
}
