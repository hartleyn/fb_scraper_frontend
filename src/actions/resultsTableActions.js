import { TABLE_SIZE_TO_FIT, TABLE_AUTO_SIZE_ALL } from './types';


export const sizeToFit = () => dispatch => {
	dispatch({
		type: TABLE_SIZE_TO_FIT,
	});
}

export const autoSizeAll = () => dispatch => {
	dispatch({
		type: TABLE_AUTO_SIZE_ALL,
	});
}
