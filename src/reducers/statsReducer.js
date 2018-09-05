import { FETCH_COMPETITIONS, FETCH_CLUBS, FETCH_HISTORICAL_TABLE } from '../actions/types';


const initialState = {
	competitions: [],
	footballClubs: [],
	historicalTable: [],
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
				historicalTable: action.payload,
			}
		default:
			return state;
	}
}
