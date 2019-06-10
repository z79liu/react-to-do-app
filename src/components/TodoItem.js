import React, { Component } from 'react'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  markComplete = (e) => {


  }


  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input onChange={this.props.markComplete.bind(this, id)}type="checkbox" /> {' '}
        <h3>{title}</h3>
        <button onClick={this.props.delete.bind(this,id)} >Delete</button>
      </div>
    )
  }
}




export default TodoItem
