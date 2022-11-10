import React from 'react'

export const TodoList = ({todos=[],deleteTodo,onToggleTodo}) => {
  return (
    <ul className='list-group'>
        {
            todos.map((todo)=>(
                <li key={todo.id} className='list-group-item d-flex justify-content-between'> 
                    <samp className={`align-self-center ${todo.done && 'text-decoration-line-through'}`}>
                        {todo.desription}
                    </samp>
                    <button className='btn btn-danger' onClick={()=>{deleteTodo(todo.id)}}>
                        Borrar
                    </button>
                </li>
            ))
        }
    </ul>  
  )
}
