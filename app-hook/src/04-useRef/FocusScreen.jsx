
import React from 'react'
import { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()
    const onClick =()=>{
        inputRef.current.select();
    }
  return (
    <>
        <h1>FocusScreem</h1>
        <hr />
        <input
            ref={inputRef} 
            type="text"
            placeholder='Ingrese su nombre'
            className='form-control'
            />
            <button className='btn btn-primary mt-1'
                    onClick={ onClick }>
                Set focus 
            </button>
    </>
  )
}
