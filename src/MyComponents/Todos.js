import React from 'react'
import { TodoItem } from './todoItem'

export const Todos = (props) => {
  let mystyle = {
    minHeight : "70vh",
    margin : "40px auto"
  }
  return (

    <div className="container" style={mystyle}>
      <h3 className=' my-3'>Todos List</h3>
      {props.todos.length === 0 ? "No TODOS to display" :
        props.todos.map((todo) => {
          console.log(todo.sno);
          return(<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />  
          )
        })
      }

    </div>
  )
}


