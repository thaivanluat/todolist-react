import React, {Component}from 'react'
import { v4 as uuidv4 } from 'uuid';

import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    todos : [
      {id: uuidv4(), content: 'Buy coffee', isCompleted: true},
      {id: uuidv4(), content: 'Make coffee', isCompleted: false},
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });

    this.setState({
      todos: todos   
    })
  }

  completeTodo = (id) => {
    const [...todos] = this.state.todos;

    const index = todos.findIndex(todo => todo.id === id);

    const foundItem = todos[index];

    todos[index] = { ...foundItem, isCompleted: !foundItem.isCompleted }

    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = uuidv4()
    todo.isCompleted = false;

    let todos = [...this.state.todos, todo];

    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">To do list</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
