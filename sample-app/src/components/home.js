import {Component} from 'react';
import {connect} from "react-redux";

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
    //console.log(to_render)
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
		deletePost : (id) => { dipatchMethod({type: "DELETE_POST", 
			id: Number(id)})}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
