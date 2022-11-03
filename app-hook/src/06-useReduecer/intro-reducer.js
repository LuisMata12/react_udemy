

const initialState = [{
    id:1,
    todo:'recolectar la piedra del in finito',
    done:false
}];
const todoReducer = (state = initialState,action={})=>{

    if(action.type==='[TODO] add todo'){
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'recolectar la piedra del poder',
    done:false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

console.log(todoReducer(todos,addTodoAction))