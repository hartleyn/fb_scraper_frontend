import { FETCH_POST } from '../actions/types';


const initialState = {
	post: {
		photo_credit: '',
		body_header: '',
		blockquote: '',
		body_content: '',
	},
}

export default function(state=initialState, action) {
	switch(action.type) {
		case FETCH_POST:
			return {
				...state,
				post: action.payload,
			}
		default:
			return state;
	}
}
