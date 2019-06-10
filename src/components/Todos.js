import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem delete={this.props.delete} key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
    ))
  }
}

export default Todos;
