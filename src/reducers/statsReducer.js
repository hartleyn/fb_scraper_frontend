import { FETCH_COMPETITIONS, FETCH_CLUBS, FETCH_HISTORICAL_TABLE, FETCH_MOCK_SUPER_LEAGUE_TABLE } from '../actions/types';


const initialState = {
	competitions: [],
	footballClubs: [],
	historicalTable: [],
	mockSuperLeagueTable: [],
	newHistoricalTable: false,
	newMockSuperLeagueTable: false,
}

export default function(state=initialState, action) {
	switch(action.type) {
		case FETCH_COMPETITIONS:
			return {
				...state,
				competitions: action.payload,
			}
		case FETCH_CLUBS:
			return {
				...state,
				footballClubs: action.payload.football_clubs,
			}
		case FETCH_HISTORICAL_TABLE:
			return {
				...state,
				newHistoricalTable: true,
				historicalTable: action.payload,
				newMockSuperLeagueTable: false,
			}
		case FETCH_MOCK_SUPER_LEAGUE_TABLE:
			return {
				...state,
				newMockSuperLeagueTable: true,
				mockSuperLeagueTable: action.payload,
				newHistoricalTable: false,
			}
		default:
			return state;
	}
}
