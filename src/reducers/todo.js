const initialState = {
  tasks: [] 
}

function next_integer(list){
	return list.length + 1
}

export default function reduer (state = initialState, action = {}){
	switch(action.type){
		case 'ADD_TODO':
			return { ...state, tasks: [ ...state.tasks, { id: next_integer(state.tasks), text: action.text }] }
		default:
			return initialState	
	}
}