import React from 'react'
import { useState } from 'react'

export const TodoAdd = ({onNewTodo}) => {
    const [description, setDesription] = useState('')

    const onFormSibmit =(event)=>{
        event.preventDefault();
        if(description.length<=0)return;

        const newtodo ={
            id: new Date().getTime(),
            done: false,
            desription:description
        };
        onNewTodo && onNewTodo(newtodo);
        setDesription('');
    }

  return (
   <> 
    <form onSubmit={onFormSibmit}>
        <input 
            type="text" 
            placeholder='que hay que hacer'
            className='form-control'
            name='add'
            value={description}
            onChange={ev=>{
                setDesription(ev.target.value)
            }}
        />
        <button 
            type='submit'
            className='btn btn-outline-primary mt-1'>
                Add
        </button>
    </form>
    </>
  )
}
