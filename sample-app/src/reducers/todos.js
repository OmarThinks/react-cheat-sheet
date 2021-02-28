const initState = {
	todos:[
		{id:1,value:"get up"},
		{id:2,value:"study hard"},
		{id:3,value:"get a job"},
	]
}

const todosReducer = (state = initState, action) => {
	if (action.type === "DELETE_POST") {
		let newTodos = state.todos.filter((t) => {
			return(t.id != action.id)})
		console.log(newTodos);
		return{
			...state,
			todos: newTodos
		}
	}
	return state;
}

export default todosReducer
