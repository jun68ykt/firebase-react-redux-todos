import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends Component{
  render(){
    const {todos, onDeleteClick, onTodoClick} = this.props;
    let list = []
    todos.forEach(todo => {
      list.push(
        <div
          key={todo.key}
          style={{
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <Todo
            text={todo.text}
            completed={todo.completed}
            onClick={() => onTodoClick(todo.key)}
          />
          <div
            style={{marginLeft:10, fontSize:8, color:'red'}}
            onClick={() => onDeleteClick(todo.key)}>
            Delete
          </div>
        </div>
      )
    });
    return(
      <ul>
        {list}
      </ul>
    )
  }
}

TodoList.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoList;
