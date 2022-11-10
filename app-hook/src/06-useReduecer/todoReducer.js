import React from 'react'

export const todoReducer = (initialState = {},action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            console.log(action.payload)
            return [...initialState, action.payload]
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload) 
        case '[TODO] Togge Todo':
            return initialState.map(todo =>{
                if(todo.id == action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
            }) 
        default:
            return initialState;
    }
} 
