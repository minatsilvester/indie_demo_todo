const Actions = {};

Actions.add_todo = (data) => {
	return dispatch => {
		dispatch({
			type: 'ADD_TODO',
			text: data.text
		})
		// dispatch('/')
	}
}

export default Actions;
