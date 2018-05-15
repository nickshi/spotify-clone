const initialState = {
	title: 'Songs'
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {

	case "UPDATE_HEADER_TITLE":
		return {
			...state,
			title: action.title
		};

	default:
		return state;
	}

};

export default uiReducer;