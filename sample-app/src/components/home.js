import {Component} from 'react';
import {connect} from "react-redux";

class Home extends Component {
  render = () => {
  	const todos = this.props.todos;
    const to_render = todos.map(todo => {
        return(
            <div className="todo" key={todo.id}>
                <p>ID is: {todo.id}</p>
                <p>Value is: {todo.value}</p>
                <hr/>
            </div>
        );}
    )
    console.log(to_render)
    return(
        <div className="todos_list">
            { to_render }
        </div>
    )  }
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	}
}

export default connect(mapStateToProps)(Home)
