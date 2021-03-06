import {Component} from 'react';
import {connect} from "react-redux";
import {deletePost} from "../actions/postActions";

class Home extends Component {
  handleDelete = (e) => {
  	console.log(e.target);
  	this.props.deletePost(e.target.id);
  }

  render = () => {
  	//console.log(this.props);
  	const todos = this.props.todos;
    const to_render = todos.map(todo => {
        return(
            <div className="todo" key={todo.id}>
                <p>ID is: {todo.id}</p>
                <p>Value is: {todo.value}</p>
                <button onClick={(e)=>{this.handleDelete(e)}}
                id={todo.id}> Delete Todo </button>
                <hr/>
            </div>
        );}
    )
    return(
        <div className="todos_list">
            { to_render }
        </div>
    )  }
}

const mapStateToProps = (state) => {
	return {todos: state.todos}
}

const mapDispatchToProps = (dipatchMethod) => {
	return {
		deletePost : (id) => { dipatchMethod(deletePost(id))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
