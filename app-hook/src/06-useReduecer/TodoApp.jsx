import React, { useReducer } from 'react'
import { useEffect } from 'react';
import { TodoAdd } from './comoponents/TodoAdd';
import { TodoList } from './comoponents/TodoList';

import { todoReducer } from './todoReducer';

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     desription: 'Recolectar la piedra del alma',
    //     done:false
    // }
];

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos'))||[];
}
export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState,init);

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
    
    const handleNewTodo = (todo)=>{
        const action = {
            type: "[TODO] Add Todo",
            payload: todo
        }
        dispatchTodo(action)
    }
    const handleDleteTodo = (id)=>{
        dispatchTodo({
            type:'[TODO] Remove Todo',
            payload:id
        })
    }
    const handleToggleTodo =(id)=>{
        dispatchTodo({
            type:'[TODO] Togge Todo',
            payload:id
        })
    }

  return (
    <>
        <h1>Todo App: 10 <small>pendientes: 2</small></h1>
        <hr />
        <div className="row">
            <div className='col-7'>
                {/* todo list  */}
                    <TodoList 
                        todos={todos} 
                        deleteTodo={handleDleteTodo}
                        onToggleTodo={handleToggleTodo}/>
                {/* todo list  */}
            </div>
            <div className='col-5'>
                <h4>Add Todo</h4>
                <hr />
                {/* todoAdd  */}
                {/* {id:???, description:????, done:false} */}
                    <TodoAdd onNewTodo={handleNewTodo} />
            </div>
        </div>
    </>
  )
}
