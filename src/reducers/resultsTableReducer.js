import { TABLE_SIZE_TO_FIT, TABLE_AUTO_SIZE_ALL } from '../actions/types';


const initialState = {
	sizeToFitWindow: false,
	autoSizeAllColumns: false,
}

export default function(state=initialState, action) {
	switch(action.type) {
		case TABLE_SIZE_TO_FIT:
			return {
				...state,
				sizeToFitWindow: true,
				autoSizeAllColumns: false,
			}
		case TABLE_AUTO_SIZE_ALL:
			return {
				...state,
				autoSizeAllColumns: true,
				sizeToFitWindow: false,
			}
		default:
			return state;
	}
}
